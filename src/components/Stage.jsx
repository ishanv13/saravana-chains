import Reveal from './Reveal'

// A full-viewport "gallery moment": no content in the centre — the 3D model
// owns the frame. Just a ghost numeral and a mono caption pinned to the edge.
export default function Stage({ id, num, caption, detail }) {
  return (
    <section id={id} className="panel stage-panel" aria-label={caption}>
      <span className="stage-num f-display" aria-hidden="true">{num}</span>
      <Reveal className="stage-caption">
        <span className="rule-lead eyebrow">{caption}</span>
        {detail && <p className="spec" style={{ marginTop: 10, letterSpacing: '0.18em' }}>{detail}</p>}
      </Reveal>
    </section>
  )
}
