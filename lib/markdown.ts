import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ContentData {
  frontmatter: Record<string, unknown>;
  content: string;
}

/**
 * Load markdown file with YAML frontmatter.
 * Structured data (arrays/objects) belongs in frontmatter.
 * Body content is normal markdown, rendered with react-markdown.
 */
export function loadContent(fileName: string): ContentData {
  const contentDir = path.join(process.cwd(), "content");
  const filePath = path.join(contentDir, fileName);

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    return {
      frontmatter: (data as Record<string, unknown>) || {},
      content: content?.trim() ?? "",
    };
  } catch (error) {
    console.error(`Error loading markdown: ${filePath}`, error);
    return { frontmatter: {}, content: "" };
  }
}

const markdownCache = new Map<string, ContentData>();

export function loadContentWithCache(fileName: string): ContentData {
  if (process.env.NODE_ENV !== "production") {
    return loadContent(fileName);
  }
  if (markdownCache.has(fileName)) {
    return markdownCache.get(fileName)!;
  }
  const data = loadContent(fileName);
  markdownCache.set(fileName, data);
  return data;
}

export function clearMarkdownCache(): void {
  markdownCache.clear();
}

export function getAllContentFiles(subdir: string = ""): string[] {
  try {
    const contentDir = path.join(process.cwd(), "content", subdir);
    if (!fs.existsSync(contentDir)) return [];
    return fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
}
