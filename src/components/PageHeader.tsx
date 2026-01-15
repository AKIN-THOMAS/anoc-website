type PageHeaderProps = {
  title: string
  subtitle: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">{subtitle}</p>
      </div>
    </section>
  )
}
