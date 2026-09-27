import Link from "next/link";
import { BreadcrumbSchema } from "@/components/SchemaScript";

export type Crumb = {
  name: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <BreadcrumbSchema
        items={items.map((item) => ({
          name: item.name,
          url: item.href || "#",
        }))}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.name}-${index}`} className="flex items-center gap-1">
                {index > 0 && (
                  <span aria-hidden="true" className="text-slate-400">
                    /
                  </span>
                )}
                {isLast || !item.href ? (
                  <span className="text-slate-900" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-blue-600">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
