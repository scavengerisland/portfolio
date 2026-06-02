"use client";

/**
 * Clean SVG architecture diagram for Orqestrate on AWS.
 * Based on docs/deploy/AWS-ARCHITECTURE.md (us-east-2, stage + prod):
 * Cloudflare edge -> public ALB -> SCAFF (ECS Fargate) in private subnet,
 * RDS Postgres + EFS in isolated subnet, S3 + KMS + Secrets Manager,
 * GitHub OIDC CI/CD, CloudWatch/CloudTrail.
 *
 * Intentionally schematic (truthful) — no per-traffic claims.
 */
export function OrqestrateDiagram({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 420"
      role="img"
      aria-label="Orqestrate AWS architecture: Cloudflare edge to a public Application Load Balancer, forwarding to the SCAFF control plane on ECS Fargate in a private subnet, with RDS Postgres and EFS in an isolated subnet, S3 storage, per-tenant KMS encryption and Secrets Manager, and GitHub OIDC CI/CD."
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          {`
            .lbl { font: 600 12px ui-sans-serif, system-ui, sans-serif; fill: #1a3a2f; }
            .sub { font: 400 10px ui-monospace, monospace; fill: #2d6f55; }
            .zone { font: 600 10px ui-sans-serif, system-ui, sans-serif; fill: #637463; letter-spacing: .04em; }
            .edge { stroke: #8dc3ab; stroke-width: 2; }
            .flow { stroke: #3d8a6b; stroke-width: 2; }
          `}
        </style>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" fill="#3d8a6b" />
        </marker>
      </defs>

      {/* AWS account boundary */}
      <rect
        x="150"
        y="58"
        width="552"
        height="338"
        rx="14"
        fill="#f0f7f4"
        stroke="#bbdccd"
        strokeWidth="1.5"
      />
      <text x="166" y="80" className="zone">
        AWS · us-east-2 · stage + prod (isolated VPCs)
      </text>

      {/* Users */}
      <g>
        <rect x="20" y="150" width="100" height="54" rx="10" fill="#1a3a2f" />
        <text x="70" y="174" textAnchor="middle" className="lbl" fill="#fdfcfb">
          Users
        </text>
        <text x="70" y="190" textAnchor="middle" className="sub" fill="#8dc3ab">
          + daemons
        </text>
      </g>

      {/* Cloudflare edge */}
      <g>
        <rect x="166" y="150" width="108" height="54" rx="10" fill="#fff" stroke="#bbdccd" />
        <text x="220" y="172" textAnchor="middle" className="lbl">
          Cloudflare
        </text>
        <text x="220" y="190" textAnchor="middle" className="sub">
          DNS · Access · TLS
        </text>
      </g>

      {/* Public subnet: ALB */}
      <text x="300" y="108" className="zone">
        PUBLIC SUBNET
      </text>
      <g>
        <rect x="300" y="150" width="104" height="54" rx="10" fill="#fff" stroke="#bbdccd" />
        <text x="352" y="172" textAnchor="middle" className="lbl">
          ALB
        </text>
        <text x="352" y="190" textAnchor="middle" className="sub">
          /health · /v1
        </text>
      </g>

      {/* Private subnet: SCAFF on Fargate */}
      <text x="430" y="108" className="zone">
        PRIVATE SUBNET
      </text>
      <g>
        <rect x="430" y="140" width="124" height="74" rx="10" fill="#fff" stroke="#bbdccd" />
        <text x="492" y="166" textAnchor="middle" className="lbl">
          SCAFF
        </text>
        <text x="492" y="183" textAnchor="middle" className="sub">
          ECS Fargate
        </text>
        <text x="492" y="198" textAnchor="middle" className="sub">
          + agent tasks
        </text>
      </g>

      {/* Isolated subnet: data */}
      <text x="582" y="108" className="zone">
        ISOLATED SUBNET
      </text>
      <g>
        <rect x="582" y="132" width="104" height="44" rx="10" fill="#fff" stroke="#bbdccd" />
        <text x="634" y="151" textAnchor="middle" className="lbl">
          RDS
        </text>
        <text x="634" y="166" textAnchor="middle" className="sub">
          Postgres 16
        </text>
      </g>
      <g>
        <rect x="582" y="182" width="104" height="40" rx="10" fill="#fff" stroke="#bbdccd" />
        <text x="634" y="207" textAnchor="middle" className="lbl">
          EFS /data
        </text>
      </g>

      {/* Bottom row: cross-cutting services */}
      <g>
        <rect x="300" y="262" width="104" height="48" rx="10" fill="#fff" stroke="#bbdccd" />
        <text x="352" y="284" textAnchor="middle" className="lbl">
          S3
        </text>
        <text x="352" y="300" textAnchor="middle" className="sub">
          uploads
        </text>
      </g>
      <g>
        <rect x="430" y="262" width="124" height="48" rx="10" fill="#fff" stroke="#bbdccd" />
        <text x="492" y="284" textAnchor="middle" className="lbl">
          KMS · Secrets Mgr
        </text>
        <text x="492" y="300" textAnchor="middle" className="sub">
          per-tenant envelope
        </text>
      </g>
      <g>
        <rect x="582" y="262" width="104" height="48" rx="10" fill="#fff" stroke="#bbdccd" />
        <text x="634" y="284" textAnchor="middle" className="lbl">
          CloudWatch
        </text>
        <text x="634" y="300" textAnchor="middle" className="sub">
          + CloudTrail
        </text>
      </g>

      {/* Anthropic + CI/CD callouts */}
      <g>
        <rect x="166" y="262" width="108" height="48" rx="10" fill="#1a3a2f" />
        <text x="220" y="284" textAnchor="middle" className="lbl" fill="#fdfcfb">
          Anthropic
        </text>
        <text x="220" y="300" textAnchor="middle" className="sub" fill="#8dc3ab">
          Anthropic API
        </text>
      </g>
      <g>
        <rect x="166" y="334" width="520" height="44" rx="10" fill="#fff" stroke="#bbdccd" />
        <text x="426" y="361" textAnchor="middle" className="lbl">
          GitHub OIDC CI/CD → ECR → roll ECS service · Terraform IaC · zero
          long-lived credentials
        </text>
      </g>

      {/* Flow arrows */}
      <line x1="120" y1="177" x2="164" y2="177" className="flow" markerEnd="url(#arrow)" />
      <line x1="274" y1="177" x2="298" y2="177" className="flow" markerEnd="url(#arrow)" />
      <line x1="404" y1="177" x2="428" y2="177" className="flow" markerEnd="url(#arrow)" />
      <line x1="554" y1="166" x2="580" y2="156" className="edge" markerEnd="url(#arrow)" />
      <line x1="554" y1="190" x2="580" y2="200" className="edge" markerEnd="url(#arrow)" />
      {/* SCAFF -> services down */}
      <line x1="492" y1="214" x2="492" y2="260" className="edge" markerEnd="url(#arrow)" />
      <line x1="470" y1="214" x2="360" y2="260" className="edge" markerEnd="url(#arrow)" />
      {/* SCAFF -> Anthropic */}
      <line x1="430" y1="200" x2="276" y2="280" className="edge" markerEnd="url(#arrow)" />
    </svg>
  );
}
