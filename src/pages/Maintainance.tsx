import logo from '../assets/logo.svg'

export default function Maintenance() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-6">
      <div className="max-w-md w-full text-center bg-white shadow-xl rounded-2xl p-8 border border-slate-200">
        <img src={logo} alt="ANOC Professional Services" className="mx-auto h-14 mb-6" />

        <h1 className="text-2xl font-semibold text-slate-900 mb-3">
          Website Temporarily Unavailable
        </h1>

        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          This website is currently undergoing administrative updates. Service will be restored
          shortly once outstanding matters are resolved.
        </p>

        <div className="border-t pt-4 text-xs text-slate-500">
          We appreciate your patience and understanding.
        </div>
        <p className="mt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} ANOC Professional Services
        </p>
      </div>
    </div>
  )
}
