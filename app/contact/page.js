import { ContentPage } from "@/components/ContentPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Book a free 30-minute product teardown with Muhammad Ahsan Ali.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContentPage name="contact" />;
}
