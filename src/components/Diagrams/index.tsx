import type {ReactNode} from 'react';
import styles from './styles.module.css';

function Figure({title, caption, children}: {title: string; caption: string; children: ReactNode}): ReactNode {
  return (
    <figure className={styles.figure}>
      <svg className={styles.svg} viewBox="0 0 720 360" role="img" aria-label={title}>
        <title>{title}</title>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" className={styles.arrowHead} />
          </marker>
          <marker id="arrowAccent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" className={styles.accentFill} />
          </marker>
        </defs>
        {children}
      </svg>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}

function Device({x, y, label, sub, accent}: {x: number; y: number; label: string; sub?: string; accent?: boolean}): ReactNode {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-46} y={-22} width={92} height={44} rx={4} className={accent ? styles.boxAccent : styles.box} />
      <text y={sub ? -3 : 5} className={styles.label} textAnchor="middle">{label}</text>
      {sub && <text y={13} className={styles.sub} textAnchor="middle">{sub}</text>}
    </g>
  );
}

export function LandslideKitDiagram(): ReactNode {
  return (
    <Figure
      title="A Grillo Slide kit on a slope"
      caption="Rovers on the moving slope report through the radio mesh to the base on stable ground, which uploads over LTE.">
      <path d="M20 300 L250 300 L560 120 L700 120" className={styles.ground} />
      <path d="M250 300 L560 120 L560 300 L250 300 Z" className={styles.slope} />
      <text x={470} y={272} className={styles.sub} textAnchor="middle">moving ground</text>
      <text x={120} y={325} className={styles.sub} textAnchor="middle">stable ground</text>

      <line x1={120} y1={246} x2={120} y2={110} className={styles.accentLine} markerEnd="url(#arrowAccent)" strokeDasharray="5 4" />
      <text x={130} y={175} className={styles.accentText}>LTE</text>
      <Device x={120} y={84} label="Grillo Cloud" sub="slide.grillo.io" />

      <Device x={120} y={268} label="Base" sub="reference" accent />
      <Device x={330} y={226} label="Rover" />
      <Device x={430} y={168} label="Rover" />
      <Device x={530} y={110} label="Rover" sub="2 hops" />

      <line x1={166} y1={262} x2={284} y2={232} className={styles.mesh} />
      <line x1={376} y1={214} x2={384} y2={180} className={styles.mesh} />
      <line x1={476} y1={156} x2={484} y2={122} className={styles.mesh} />
      <text x={226} y={232} className={styles.sub} textAnchor="middle">radio mesh</text>
    </Figure>
  );
}

export function WarningTimeDiagram(): ReactNode {
  return (
    <Figure
      title="Blind zone and warning time"
      caption="Near the epicentre, shaking arrives before an alert can go out. Farther away, the gap between the alert and the strong shaking grows.">
      <line x1={60} y1={300} x2={680} y2={300} className={styles.axis} markerEnd="url(#arrow)" />
      <text x={680} y={326} className={styles.sub} textAnchor="end">distance from epicentre</text>
      <line x1={60} y1={300} x2={60} y2={40} className={styles.axis} markerEnd="url(#arrow)" />
      <text x={50} y={34} className={styles.sub} textAnchor="start">time after the earthquake starts</text>

      <line x1={60} y1={300} x2={660} y2={60} className={styles.wave} />
      <text x={600} y={74} className={styles.label} textAnchor="end">strong shaking arrives</text>

      <line x1={60} y1={196} x2={660} y2={196} className={styles.accentLine} strokeDasharray="6 4" />
      <text x={656} y={188} className={styles.accentText} textAnchor="end">alert sent</text>

      <rect x={60} y={196} width={260} height={104} className={styles.blind} />
      <text x={312} y={268} className={styles.label} textAnchor="end">blind zone</text>
      <text x={312} y={286} className={styles.sub} textAnchor="end">shaking before the alert</text>

      <line x1={520} y1={196} x2={520} y2={116} className={styles.gap} markerStart="url(#arrow)" markerEnd="url(#arrow)" />
      <text x={530} y={160} className={styles.label}>warning time</text>
    </Figure>
  );
}

function Box({x, y, w, label, sub, accent}: {x: number; y: number; w: number; label: string; sub: string; accent?: boolean}): ReactNode {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x={-w / 2} y={-26} width={w} height={52} rx={4} className={accent ? styles.boxAccent : styles.box} />
      <text y={-4} className={styles.label} textAnchor="middle">{label}</text>
      <text y={14} className={styles.sub} textAnchor="middle">{sub}</text>
    </g>
  );
}

export function DataPathDiagram(): ReactNode {
  return (
    <Figure
      title="Where Grillo Pulse and Grillo One data goes"
      caption="Health reports always go to Grillo Cloud. Seismic data goes to Grillo by default, or to your own server running coap2seis.">
      <Box x={110} y={180} w={130} label="Pulse / One" sub="sensor" accent />

      <line x1={175} y1={166} x2={448} y2={72} className={styles.line} markerEnd="url(#arrow)" />
      <text x={300} y={98} className={styles.sub} textAnchor="middle">health · UDP 5683</text>
      <Box x={560} y={64} w={220} label="Grillo Cloud" sub="status · health · firmware" />

      <line x1={175} y1={180} x2={448} y2={180} className={styles.line} markerEnd="url(#arrow)" />
      <text x={310} y={170} className={styles.sub} textAnchor="middle">seismic · UDP 5684 (default)</text>
      <Box x={560} y={180} w={220} label="Grillo · SISTEM add-on" sub="events · waveforms" />

      <line x1={175} y1={194} x2={448} y2={290} className={styles.line} strokeDasharray="5 4" markerEnd="url(#arrow)" />
      <text x={240} y={262} className={styles.sub} textAnchor="middle">or, if Grillo sets it</text>
      <Box x={560} y={296} w={220} label="Your server · coap2seis" sub="Earthworm · miniSEED" />
    </Figure>
  );
}
