import { useScrollProgress, anchor } from '../three/scroll'

// Signature chrome: a measurement frame whose mono tags update live with scroll,
// as if the chain in the centre were being examined under a loupe.
export default function AssayFrame() {
  const p = useScrollProgress()
  const fig = p < anchor('stage-collection', 0.56) ? { n: '01', label: 'Single Strand' } : { n: '02', label: 'Chain Set' }
  const theta = ((p * 720) % 360).toFixed(1)
  const depth = p.toFixed(3)

  return (
    <div className="assay-frame">
      <span className="corner tl" />
      <span className="corner tr" />
      <span className="corner bl" />
      <span className="corner br" />
      <span className="assay-tag top">
        Fig.<b>{fig.n}</b> — {fig.label}
      </span>
      <span className="assay-tag bottom">
        θ <b>{theta}°</b> · depth <b>{depth}</b> · Au 916
      </span>
    </div>
  )
}
