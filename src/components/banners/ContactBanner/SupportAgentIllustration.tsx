import type { SVGProps } from "react";

export default function SupportAgentIllustration(
  props: SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      viewBox="0 0 420 380"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="VELOOP Rewards support agent"
      {...props}
    >
      <defs>
        {/* =====================================================
            SKIN
        ===================================================== */}

        <linearGradient
          id="agent-skin"
          x1="155"
          y1="70"
          x2="245"
          y2="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f3d5bd" />
          <stop offset="0.5" stopColor="#dba98e" />
          <stop offset="1" stopColor="#b97965" />
        </linearGradient>

        {/* =====================================================
            HAIR
        ===================================================== */}

        <linearGradient
          id="agent-hair"
          x1="145"
          y1="50"
          x2="250"
          y2="140"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#38465b" />
          <stop offset="0.45" stopColor="#182536" />
          <stop offset="1" stopColor="#0a1422" />
        </linearGradient>

        {/* =====================================================
            JACKET
        ===================================================== */}

        <linearGradient
          id="agent-jacket"
          x1="120"
          y1="190"
          x2="300"
          y2="350"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#344966" />
          <stop offset="0.4" stopColor="#1c304a" />
          <stop offset="0.75" stopColor="#101d30" />
          <stop offset="1" stopColor="#0a1423" />
        </linearGradient>

        {/* =====================================================
            BLUE ACCENT
        ===================================================== */}

        <linearGradient
          id="agent-blue"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0" stopColor="#b9cdf2" />
          <stop offset="0.35" stopColor="#86a9e8" />
          <stop offset="0.7" stopColor="#557cbd" />
          <stop offset="1" stopColor="#38588c" />
        </linearGradient>

        {/* =====================================================
            CHAT BUBBLE
        ===================================================== */}

        <linearGradient
          id="agent-chat"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0" stopColor="#344b6c" />
          <stop offset="0.5" stopColor="#203651" />
          <stop offset="1" stopColor="#132238" />
        </linearGradient>

        {/* =====================================================
            GLASS / BADGE
        ===================================================== */}

        <linearGradient
          id="agent-badge"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0" stopColor="#3c587b" />
          <stop offset="1" stopColor="#17283f" />
        </linearGradient>

        {/* =====================================================
            SOFT HIGHLIGHT
        ===================================================== */}

        <linearGradient
          id="agent-highlight"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="0.35" stopColor="#ffffff" stopOpacity="0.07" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* =====================================================
            DEPTH
        ===================================================== */}

        <filter
          id="agent-shadow"
          x="-35%"
          y="-35%"
          width="170%"
          height="190%"
        >
          <feDropShadow
            dx="0"
            dy="18"
            stdDeviation="13"
            floodColor="#000000"
            floodOpacity="0.38"
          />
        </filter>
      </defs>

      {/* =====================================================
          BACKING SHAPE
          Gives the character some separation from the banner.
      ===================================================== */}

      <ellipse
        cx="214"
        cy="335"
        rx="105"
        ry="17"
        fill="#050c17"
        opacity="0.75"
      />

      {/* =====================================================
          SUPPORT AGENT
      ===================================================== */}

      <g filter="url(#agent-shadow)">
        {/* ------------------------------
            SHOULDERS
        ------------------------------ */}

        <path
          d="
            M108 343
            C112 280 139 230 176 216
            C190 210 205 207 220 207
            C235 207 250 210 264 216
            C301 230 328 280 332 343
            Z
          "
          fill="url(#agent-jacket)"
          stroke="#8299b8"
          strokeOpacity="0.2"
          strokeWidth="1.5"
        />

        {/* Jacket highlight */}
        <path
          d="
            M143 288
            C151 248 175 225 202 218
          "
          fill="none"
          stroke="url(#agent-highlight)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* ------------------------------
            NECK
        ------------------------------ */}

        <path
          d="
            M190 193
            L190 218
            C199 226 211 230 220 230
            C229 230 241 226 250 218
            L250 193
            Z
          "
          fill="url(#agent-skin)"
        />

        {/* ------------------------------
            FACE
        ------------------------------ */}

        <path
          d="
            M163 104
            C163 76 187 58 220 58
            C253 58 277 76 277 104
            L273 154
            C270 180 250 200 220 204
            C190 200 170 180 167 154
            Z
          "
          fill="url(#agent-skin)"
          stroke="#f0c8af"
          strokeOpacity="0.16"
        />

        {/* ------------------------------
            HAIR
        ------------------------------ */}

        <path
          d="
            M160 111
            C154 77 175 47 214 43
            C251 39 279 62 281 98
            C270 87 260 79 246 77
            C224 73 210 82 196 91
            C183 100 173 108 160 111
            Z
          "
          fill="url(#agent-hair)"
        />

        {/* Hair highlight */}
        <path
          d="
            M177 78
            C190 58 214 51 238 57
          "
          fill="none"
          stroke="#8798ae"
          strokeOpacity="0.22"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* ------------------------------
            EARS
        ------------------------------ */}

        <ellipse
          cx="164"
          cy="128"
          rx="9"
          ry="17"
          fill="#c98f77"
        />

        <ellipse
          cx="276"
          cy="128"
          rx="9"
          ry="17"
          fill="#c98f77"
        />

        {/* ------------------------------
            EYES
        ------------------------------ */}

        <ellipse
          cx="196"
          cy="126"
          rx="4"
          ry="2.5"
          fill="#1b2534"
        />

        <ellipse
          cx="244"
          cy="126"
          rx="4"
          ry="2.5"
          fill="#1b2534"
        />

        {/* Eye highlights */}
        <circle
          cx="197"
          cy="125.5"
          r="0.9"
          fill="#ffffff"
          opacity="0.8"
        />

        <circle
          cx="245"
          cy="125.5"
          r="0.9"
          fill="#ffffff"
          opacity="0.8"
        />

        {/* ------------------------------
            NOSE
        ------------------------------ */}

        <path
          d="M220 129 C218 139 216 144 220 147 C223 148 226 147 228 145"
          fill="none"
          stroke="#b77968"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* ------------------------------
            SMILE
        ------------------------------ */}

        <path
          d="
            M207 158
            C214 164 226 164 233 158
          "
          fill="none"
          stroke="#9e5f58"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* ------------------------------
            COLLAR
        ------------------------------ */}

        <path
          d="
            M190 215
            L220 244
            L250 215
            L266 227
            L235 260
            L205 260
            L174 227
            Z
          "
          fill="#17273c"
          stroke="#7187a6"
          strokeOpacity="0.22"
        />

        {/* Collar highlight */}
        <path
          d="M192 221 L220 246 L248 221"
          fill="none"
          stroke="#9eb4d1"
          strokeOpacity="0.18"
          strokeWidth="2"
        />

        {/* ------------------------------
            VE BADGE
        ------------------------------ */}

        <circle
          cx="220"
          cy="286"
          r="27"
          fill="url(#agent-badge)"
          stroke="url(#agent-blue)"
          strokeWidth="1.5"
        />

        <circle
          cx="220"
          cy="286"
          r="21"
          fill="#0d1a2b"
          stroke="#829bc4"
          strokeOpacity="0.16"
        />

        <text
          x="220"
          y="290"
          textAnchor="middle"
          fill="#e3edff"
          fontSize="12"
          fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
        >
          VE
        </text>

        {/* ------------------------------
            JACKET SEAM
        ------------------------------ */}

        <path
          d="M220 314 V340"
          stroke="#7890b0"
          strokeOpacity="0.15"
          strokeWidth="2"
        />
      </g>

      {/* =====================================================
    CHAT BUBBLE — MAIN
===================================================== */}

      <g>
        <rect
          x="270"
          y="65"
          width="138"
          height="72"
          rx="17"
          fill="url(#agent-chat)"
          stroke="#91acd7"
          strokeOpacity="0.32"
          strokeWidth="1.3"
          filter="url(#agent-shadow)"
        />

        {/* Bubble tail */}
        <path
          d="M293 132 L287 147 L306 134"
          fill="#213750"
          stroke="#91acd7"
          strokeOpacity="0.22"
        />

        {/* Chat icon */}
        <circle
          cx="293"
          cy="90"
          r="15"
          fill="#2c4b73"
          stroke="#8eafe2"
          strokeOpacity="0.32"
        />

        <path
          d="M286 88 H300 M286 94 H296"
          stroke="#c4d7f5"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        {/* Support title */}
        <text
          x="316"
          y="89"
          fill="#e7eef9"
          fontSize="10"
          fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
        >
          VELOOP Support
        </text>

        {/* Support message */}
        <text
          x="316"
          y="105"
          fill="#9aacc5"
          fontSize="8"
          fontFamily="Inter, system-ui, sans-serif"
        >
          We're here to help.
        </text>

        {/* Online indicator */}
        <circle
          cx="316"
          cy="122"
          r="3.5"
          fill="#63d19b"
        />

        <text
          x="326"
          y="125"
          fill="#76d5a1"
          fontSize="7.5"
          fontWeight="600"
          fontFamily="Inter, system-ui, sans-serif"
        >
          Online now
        </text>
      </g>

      {/* =====================================================
    SMALL MESSAGE BUBBLE
===================================================== */}

      <g opacity="0.98">
        <rect
          x="38"
          y="172"
          width="112"
          height="56"
          rx="15"
          fill="url(#agent-chat)"
          stroke="#7897c6"
          strokeOpacity="0.28"
          strokeWidth="1.1"
        />

        <path
          d="M125 223 L134 236 L138 221"
          fill="#1c3049"
        />

        {/* Message icon */}
        <circle
          cx="59"
          cy="196"
          r="10"
          fill="#29476e"
          stroke="#8eafe2"
          strokeOpacity="0.18"
        />

        <path
          d="M54 194 H64 M54 199 H62"
          stroke="#b2c9ee"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Title */}
        <text
          x="75"
          y="195"
          fill="#e1e9f6"
          fontSize="8"
          fontWeight="600"
          fontFamily="Inter, system-ui, sans-serif"
        >
          Need help?
        </text>

        {/* Description */}
        <text
          x="75"
          y="208"
          fill="#8da0bc"
          fontSize="7"
          fontFamily="Inter, system-ui, sans-serif"
        >
          Talk to our team
        </text>
      </g>

      {/* =====================================================
          SMALL RESOLUTION CHECK
      ===================================================== */}

      <g>
        <circle
          cx="333"
          cy="194"
          r="18"
          fill="#102a20"
          stroke="#5fc28e"
          strokeOpacity="0.35"
        />

        <path
          d="M325 194 L331 200 L342 187"
          fill="none"
          stroke="#83dbaa"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}