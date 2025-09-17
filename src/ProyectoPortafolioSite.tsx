import React, { useMemo, useState } from "react";

// =====================================================
// Proyecto Portafolio – Plantilla React + TypeScript
// - Single-file component listo para pegar en un proyecto Vite (react-ts)
// - Estilos con Tailwind (clases utilitarias)
// - Estructura basada en los 5 botones/fases y sus subpuntos
// =====================================================

// Tipos para mayor claridad
 type FaseId = "analisis" | "planeacion" | "ejecucion" | "evaluacion" | "conclusiones";

 type WebItem = { label: string; url: string };

 type EvidenciaFoto = { src: string; alt: string };

export default function ProyectoPortafolioSite() {
  const [fase, setFase] = useState<FaseId>("analisis");

  // Ejemplos/placeholder (cámbialos por tu contenido real)
  const webgrafiaBase: WebItem[] = useMemo(
    () => [
      { label: "Artículo 1 – Base teórica", url: "https://example.com/articulo-1" },
      { label: "Recurso 2 – Guía técnica", url: "https://example.com/guia-tecnica" },
      { label: "Video 3 – Conceptos clave", url: "https://example.com/video-conceptos" },
    ],
    []
  );

  const fotosLugar: EvidenciaFoto[] = useMemo(
    () => [
      { src: "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop", alt: "Evidencia 1" },
      { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop", alt: "Evidencia 2" },
      { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop", alt: "Evidencia 3" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Encabezado */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
                src="/logo.png"
                alt="Logo"
                className="w-15 h-15 rounded-2xl object-cover"/>
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold leading-tight">Portafolio del Proyecto</h1>
              <p className="text-sm text-neutral-500">Proyecto realizado por Santiago Camargo y Juan Herrera (En Cloudflare Pages)</p>
            </div>
          </div>

          {/* Menú superior de fases */}
          <nav className="hidden md:flex items-center gap-2">
            <FaseButton active={fase === "analisis"} onClick={() => setFase("analisis")}>Fase Análisis</FaseButton>
            <FaseButton active={fase === "planeacion"} onClick={() => setFase("planeacion")}>Fase Planeación</FaseButton>
            <FaseButton active={fase === "ejecucion"} onClick={() => setFase("ejecucion")}>Fase Ejecución</FaseButton>
            <FaseButton active={fase === "evaluacion"} onClick={() => setFase("evaluacion")}>Fase Evaluación</FaseButton>
            <FaseButton active={fase === "conclusiones"} onClick={() => setFase("conclusiones")}>Conclusiones</FaseButton>
          </nav>
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-12 gap-6">
        {/* Menú lateral en móviles/desktop (duplicamos para UX) */}
        <aside className="md:col-span-3 lg:col-span-2">
          <div className="md:hidden mb-4">{/* móvil */}
            <SelectFase value={fase} onChange={setFase} />
          </div>

          <div className="hidden md:block sticky top-20">
            <div className="flex flex-col gap-2">
              <FaseItem active={fase === "analisis"} onClick={() => setFase("analisis")} label="1. Fase Análisis" />
              <FaseItem active={fase === "planeacion"} onClick={() => setFase("planeacion")} label="2. Fase Planeación" />
              <FaseItem active={fase === "ejecucion"} onClick={() => setFase("ejecucion")} label="3. Fase Ejecución" />
              <FaseItem active={fase === "evaluacion"} onClick={() => setFase("evaluacion")} label="4. Fase Evaluación" />
              <FaseItem active={fase === "conclusiones"} onClick={() => setFase("conclusiones")} label="5. Conclusiones generales" />
            </div>
          </div>
        </aside>

        {/* Panel de fase */}
        <section className="md:col-span-9 lg:col-span-10">
          {fase === "analisis" && (
            <Section title="1. Fase Análisis">
              <Card title="1.1 Resumen del proyecto (ES/EN)">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">Resumen en Español</h4>
                    <p className="text-sm text-neutral-600 mt-2">
                      {/* Reemplaza este texto */}
                      Descripción breve del proyecto, contexto, necesidad y público objetivo. Máx. 150–200 palabras.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Summary in English</h4>
                    <p className="text-sm text-neutral-600 mt-2">
                      Short project summary: context, need, and target audience. Max. 150–200 words.
                    </p>
                    <div className="mt-3 p-3 rounded-xl border bg-neutral-50">
                      <p className="text-sm">
                        <span className="font-medium">Teacher signature / stamp:</span> ___________________________
                      </p>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm font-medium">Audio en inglés (participación de todos los autores):</p>
                      <audio className="mt-2 w-full" controls src="#">
                        Tu navegador no soporta el elemento de audio.
                      </audio>
                    </div>
                  </div>
                </div>
              </Card>

              <Card title="1.2 Descripción del problema">
                <p className="text-sm text-neutral-700">
                  Expón la situación actual, actores involucrados, causas/efectos y evidencia que soporta el problema.
                </p>
              </Card>

              <Card title="1.3 Objetivo del proyecto">
                <ul className="list-disc pl-6 text-sm text-neutral-700 space-y-1">
                  <li><span className="font-medium">General:</span> …</li>
                  <li><span className="font-medium">Específicos:</span> …</li>
                </ul>
              </Card>

              <Card title="1.4 Alcance del proyecto">
                <p className="text-sm text-neutral-700">Define qué incluye, qué excluye, entregables y criterios de éxito.</p>
              </Card>

              <Card title="1.5 Lugar de implementación – Evidencia fotográfica">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {fotosLugar.map((f, i) => (
                    <figure key={i} className="overflow-hidden rounded-2xl border">
                      <img src={f.src} alt={f.alt} className="w-full h-44 object-cover hover:scale-105 transition-transform" />
                      <figcaption className="p-2 text-xs text-neutral-600">{f.alt}</figcaption>
                    </figure>
                  ))}
                </div>
              </Card>

              <Card title="1.6 Infografía (marco teórico)">
                <div className="rounded-2xl border overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                    alt="Infografía marco teórico"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <p className="text-xs text-neutral-500 mt-2">Sugerencia: exporta tu infografía a PNG o SVG e insértala aquí.</p>
              </Card>

              <Card title="1.7 Formato de acuerdo y consentimiento">
                <p className="text-sm text-neutral-700">Adjunta o enlaza tu formato firmado (PDF):</p>
                <div className="mt-2 flex gap-2">
                  <a className="btn" href="#" target="_blank" rel="noreferrer">Ver/Descargar PDF</a>
                  <a className="btn btn-secondary" href="#" target="_blank" rel="noreferrer">Plantilla</a>
                </div>
              </Card>

              <Card title="1.8 Webgrafía">
                <WebList items={webgrafiaBase} />
              </Card>
            </Section>
          )}

          {fase === "planeacion" && (
            <Section title="2. Fase Planeación">
              <Card title="2.1 Tabla de cotizaciones (usar formato anexo)">
                <TablaCotizaciones />
                <p className="text-xs text-neutral-500 mt-2">Anexa soportes (PDF, enlaces o imágenes de cotizaciones).</p>
              </Card>

              <Card title="2.2 Cronograma de actividades (formato anexo + Microsoft To Do)">
                <CronogramaSimple />
                <div className="mt-3">
                  <a className="btn" href="https://to-do.microsoft.com" target="_blank" rel="noreferrer">Abrir Microsoft To Do</a>
                </div>
              </Card>

              <Card title="2.3 Evidencias – Primer avance de implementación">
                <p className="text-sm text-neutral-700">Incluye fotos, capturas, enlaces a repositorios o prototipos.</p>
              </Card>

              <Card title="2.4 Webgrafía">
                <WebList items={webgrafiaBase} />
              </Card>
            </Section>
          )}

          {fase === "ejecucion" && (
            <Section title="3. Fase Ejecución">
              <Card title="3.1 Formatos según línea de proyecto">
                <ul className="list-disc pl-6 text-sm text-neutral-700 space-y-1">
                  <li>Checklist de instalación / despliegue.</li>
                  <li>Acta de inicio / aceptación parcial.</li>
                  <li>Formato de pruebas / QA.</li>
                </ul>
              </Card>

              <Card title="3.2 Evidencias multimediales">
                <p className="text-sm text-neutral-700">Inserta galería de imágenes, videos (YouTube/Vimeo) o grabaciones.</p>
              </Card>

              <Card title="3.3 Webgrafía">
                <WebList items={webgrafiaBase} />
              </Card>
            </Section>
          )}

          {fase === "evaluacion" && (
            <Section title="4. Fase Evaluación">
              <Card title="4.1 Carta de satisfacción del servicio">
                <p className="text-sm text-neutral-700">Adjunta carta firmada por el cliente (PDF/imagen):</p>
                <div className="mt-2 flex gap-2">
                  <a className="btn" href="#" target="_blank" rel="noreferrer">Ver/Descargar</a>
                  <a className="btn btn-secondary" href="#" target="_blank" rel="noreferrer">Plantilla</a>
                </div>
              </Card>

              <Card title="4.2 Recomendaciones para el cliente">
                <ul className="list-disc pl-6 text-sm text-neutral-700 space-y-1">
                  <li>Mejoras sugeridas a corto plazo…</li>
                  <li>Plan de mantenimiento…</li>
                  <li>Capacitación recomendada…</li>
                </ul>
              </Card>

              <Card title="4.3 Cargar evidencias en el Site">
                <p className="text-sm text-neutral-700">Incluye enlaces a carpetas (Drive/SharePoint) o repositorios.</p>
              </Card>

              <Card title="4.4 Webgrafía">
                <WebList items={webgrafiaBase} />
              </Card>
            </Section>
          )}

          {fase === "conclusiones" && (
            <Section title="5. Conclusiones generales">
              <Card title="Resumen de hallazgos y resultados">
                <p className="text-sm text-neutral-700">Sintetiza impactos, aprendizajes, métricas y pasos futuros.</p>
              </Card>
            </Section>
          )}
        </section>
      </main>

      <footer className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-6 text-xs text-neutral-500 flex flex-wrap gap-2 items-center justify-between">
          <span>© {new Date().getFullYear()} Portafolio del Proyecto</span>
          <span>
            Hecho con <a className="underline hover:no-underline" href="https://react.dev" target="_blank" rel="noreferrer">React</a> +
            <a className="underline hover:no-underline ml-1" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">TypeScript</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

// ====== Componentes auxiliares ======
function FaseButton({ active, onClick, children }: { active?: boolean; onClick?: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={[
        "px-3 py-2 rounded-xl text-sm border",
        active ? "bg-black text-white border-black" : "bg-white hover:bg-neutral-100 border-neutral-300",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function FaseItem({ label, active, onClick }: { label: string; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={[
        "w-full text-left px-3 py-2 rounded-xl border",
        active ? "bg-black text-white border-black" : "bg-white hover:bg-neutral-100 border-neutral-300",
      ].join(" ")}
    >
      <span className="text-sm">{label}</span>
    </button>
  );
}

function SelectFase({ value, onChange }: { value: FaseId; onChange: (f: FaseId) => void }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as FaseId)}
      className="w-full px-3 py-2 rounded-xl border border-neutral-300 bg-white text-sm"
    >
      <option value="analisis">1. Fase Análisis</option>
      <option value="planeacion">2. Fase Planeación</option>
      <option value="ejecucion">3. Fase Ejecución</option>
      <option value="evaluacion">4. Fase Evaluación</option>
      <option value="conclusiones">5. Conclusiones generales</option>
    </select>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex flex-col gap-5">{children}</div>
    </section>
  );
}

function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 md:p-5 shadow-sm">
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}

function WebList({ items }: { items: WebItem[] }) {
  return (
    <ul className="list-disc pl-6 text-sm text-neutral-700 space-y-1">
      {items.map((it, idx) => (
        <li key={idx}>
          <a className="underline hover:no-underline" href={it.url} target="_blank" rel="noreferrer">
            {it.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function TablaCotizaciones() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[640px] w-full border border-neutral-200 rounded-xl overflow-hidden text-sm">
        <thead className="bg-neutral-100">
          <tr>
            <Th>Proveedor</Th>
            <Th>Descripción</Th>
            <Th>Unidad</Th>
            <Th>Cantidad</Th>
            <Th>Vlr Unit.</Th>
            <Th>Subtotal</Th>
            <Th>Observaciones</Th>
          </tr>
        </thead>
        <tbody>
          {[
            { prov: "Proveedor A", desc: "Ítem 1", u: "und", qty: 2, unit: 120000, obs: "Entrega 3 días" },
            { prov: "Proveedor B", desc: "Ítem 2", u: "und", qty: 1, unit: 350000, obs: "Garantía 1 año" },
          ].map((r, i) => (
            <tr key={i} className="odd:bg-white even:bg-neutral-50">
              <Td>{r.prov}</Td>
              <Td>{r.desc}</Td>
              <Td>{r.u}</Td>
              <Td>{r.qty}</Td>
              <Td>${formatNumber(r.unit)}</Td>
              <Td className="font-medium">${formatNumber(r.qty * r.unit)}</Td>
              <Td>{r.obs}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CronogramaSimple() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[640px] w-full border border-neutral-200 rounded-xl overflow-hidden text-sm">
        <thead className="bg-neutral-100">
          <tr>
            <Th>Actividad</Th>
            <Th>Responsable</Th>
            <Th>Inicio</Th>
            <Th>Fin</Th>
            <Th>Estado</Th>
          </tr>
        </thead>
        <tbody>
          {[
            { act: "Recolección de requisitos", resp: "Equipo", ini: "2025-09-20", fin: "2025-09-22", est: "En curso" },
            { act: "Diseño de solución", resp: "Líder", ini: "2025-09-23", fin: "2025-09-28", est: "Pendiente" },
          ].map((r, i) => (
            <tr key={i} className="odd:bg-white even:bg-neutral-50">
              <Td>{r.act}</Td>
              <Td>{r.resp}</Td>
              <Td>{r.ini}</Td>
              <Td>{r.fin}</Td>
              <Td>
                <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full border text-xs">
                  <span className={
                    r.est === "En curso"
                      ? "w-2 h-2 rounded-full bg-amber-500"
                      : r.est === "Completado"
                      ? "w-2 h-2 rounded-full bg-emerald-600"
                      : "w-2 h-2 rounded-full bg-neutral-400"
                  } />
                  {r.est}
                </span>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left px-3 py-2 border-b border-neutral-200 font-semibold">{children}</th>;
}

function Td({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <td className={["px-3 py-2 border-b border-neutral-100", className].join(" ")}>{children}</td>;
}

function formatNumber(n: number) {
  try {
    return new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 }).format(n);
  } catch {
    return String(n);
  }
}
