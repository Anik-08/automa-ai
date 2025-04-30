// app/dashboard/pdf-summarizer/page.tsx
import { PdfSummarizer } from '@/app/components/PdfSummarizer'

export default function PdfSummarizerPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">PDF Summarizer</h1>
      <PdfSummarizer />
    </div>
  );
}
