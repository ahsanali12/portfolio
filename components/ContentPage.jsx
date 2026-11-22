import { LegacyMain } from "@/components/LegacyMain";
import { getContent } from "@/lib/content";

export function ContentPage({ name }) {
  return (
    <div className="min-h-screen pt-20">
      <LegacyMain html={getContent(name)} />
    </div>
  );
}
