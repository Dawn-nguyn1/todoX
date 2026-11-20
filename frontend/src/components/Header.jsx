import { CheckCircle2, Sparkles } from "lucide-react";

function Header() {
  return <header className="py-2 text-center"><div className="mb-2 flex items-center justify-center gap-2 text-violet-600"><Sparkles className="size-5" /><span className="text-sm font-semibold uppercase tracking-[0.2em]">TodoX</span></div><h1 className="text-3xl font-bold tracking-tight text-slate-800">Hoàn thành mọi việc</h1><p className="mt-2 text-sm text-slate-500"><CheckCircle2 className="mr-1 inline size-4 text-emerald-500" />Tổ chức ngày của bạn thật nhẹ nhàng</p></header>;
}

export default Header;
