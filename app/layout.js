import { Cairo } from "next/font/google";
import "./globals.css";
import "./css/all.min.css"

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata = {
  title: " خلك دايماً جاهز مع باكج صامل الاحترافي!",
  description: "الخيار المفضل لكل عشاق الصيانة والابتكار! نعرّفك اليوم على الباكج الأكثر طلبًا: مفك صامل ولاصق النانو، يخلي حياتك اليومية أسهل وأمتع.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
