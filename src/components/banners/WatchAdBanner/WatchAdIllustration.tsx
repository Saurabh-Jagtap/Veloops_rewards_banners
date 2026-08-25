import styles from "./WatchAdIllustration.module.css";

type CoinVariant = "gold" | "purple" | "blue";

interface CoinProps {
  variant: CoinVariant;
  size: number;
}

const COIN_COLORS = {
  gold: {
    highlight: "#FFF1A3",
    inner: "#FFD45A",
    outer: "#F2AE22",
    mid: "#C9810E",
    dark: "#6D3E05",
    text: "#7A4706",
  },

  purple: {
    highlight: "#F0D5FF",
    inner: "#C99AFF",
    outer: "#9B5CE8",
    mid: "#7139B6",
    dark: "#3C1C69",
    text: "#4C267D",
  },

  blue: {
    highlight: "#E5F3FF",
    inner: "#A7D3FF",
    outer: "#70A7E8",
    mid: "#477FC3",
    dark: "#214D83",
    text: "#285586",
  },
} as const;

function VECoin({ variant, size }: CoinProps) {
  const palette = COIN_COLORS[variant];
  const id = `coin-${variant}-${size}`;

  return (
    <div
      className={`${styles.watchAdCoin} ${
        variant === "gold"
          ? styles.watchAdCoinGold
          : variant === "purple"
            ? styles.watchAdCoinPurple
            : styles.watchAdCoinBlue
      }`}
      style={{
        width: size,
        height: size,
      }}
    >
      <svg
        viewBox="0 0 160 160"
        width="100%"
        height="100%"
        aria-hidden="true"
        overflow="visible"
      >
        <defs>
          {/* ============================================================ */}
          {/* OUTER METALLIC EDGE                                          */}
          {/* ============================================================ */}

          <radialGradient
            id={`${id}-outer`}
            cx="28%"
            cy="20%"
            r="82%"
          >
            <stop offset="0%" stopColor={palette.highlight} />
            <stop offset="18%" stopColor={palette.inner} />
            <stop offset="45%" stopColor={palette.outer} />
            <stop offset="72%" stopColor={palette.mid} />
            <stop offset="100%" stopColor={palette.dark} />
          </radialGradient>

          {/* ============================================================ */}
          {/* FRONT METALLIC FACE                                          */}
          {/* ============================================================ */}

          <radialGradient
            id={`${id}-face`}
            cx="30%"
            cy="22%"
            r="80%"
          >
            <stop
              offset="0%"
              stopColor="#FFF8C8"
              stopOpacity="0.95"
            />

            <stop
              offset="12%"
              stopColor={palette.highlight}
            />

            <stop
              offset="35%"
              stopColor={palette.inner}
            />

            <stop
              offset="66%"
              stopColor={palette.outer}
            />

            <stop
              offset="88%"
              stopColor={palette.mid}
            />

            <stop
              offset="100%"
              stopColor={palette.dark}
            />
          </radialGradient>

          {/* ============================================================ */}
          {/* SIDE WALL                                                    */}
          {/* ============================================================ */}

          <linearGradient
            id={`${id}-side`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor={palette.outer}
            />

            <stop
              offset="22%"
              stopColor={palette.mid}
            />

            <stop
              offset="58%"
              stopColor={palette.dark}
            />

            <stop
              offset="100%"
              stopColor="#3A2105"
            />
          </linearGradient>

          {/* ============================================================ */}
          {/* BEVEL                                                        */}
          {/* ============================================================ */}

          <linearGradient
            id={`${id}-bevel`}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#FFF8CC"
              stopOpacity="0.95"
            />

            <stop
              offset="25%"
              stopColor={palette.highlight}
              stopOpacity="0.72"
            />

            <stop
              offset="55%"
              stopColor={palette.outer}
              stopOpacity="0.35"
            />

            <stop
              offset="100%"
              stopColor={palette.dark}
              stopOpacity="0.75"
            />
          </linearGradient>

          {/* ============================================================ */}
          {/* INNER FACE                                                   */}
          {/* ============================================================ */}

          <radialGradient
            id={`${id}-innerFace`}
            cx="32%"
            cy="25%"
            r="75%"
          >
            <stop
              offset="0%"
              stopColor={palette.highlight}
              stopOpacity="0.48"
            />

            <stop
              offset="38%"
              stopColor={palette.inner}
              stopOpacity="0.35"
            />

            <stop
              offset="100%"
              stopColor={palette.mid}
              stopOpacity="0.16"
            />
          </radialGradient>

          {/* ============================================================ */}
          {/* EMBOSSED TEXT                                                */}
          {/* ============================================================ */}

          <linearGradient
            id={`${id}-text`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#FFF5A8"
            />

            <stop
              offset="42%"
              stopColor={palette.text}
            />

            <stop
              offset="100%"
              stopColor="#4B2A05"
            />
          </linearGradient>

          {/* ============================================================ */}
          {/* SHADOW                                                       */}
          {/* ============================================================ */}

          <filter
            id={`${id}-shadow`}
            x="-50%"
            y="-50%"
            width="200%"
            height="220%"
          >
            <feDropShadow
              dx="0"
              dy="9"
              stdDeviation="7"
              floodColor="#020817"
              floodOpacity="0.58"
            />
          </filter>

          <filter
            id={`${id}-highlight`}
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* ================================================================ */}
        {/* CONTACT SHADOW                                                   */}
        {/* ================================================================ */}

        <ellipse
          cx="82"
          cy="139"
          rx="42"
          ry="9"
          fill="#020817"
          opacity="0.3"
          filter={`url(#${id}-highlight)`}
        />

        <g filter={`url(#${id}-shadow)`}>
          {/* ============================================================ */}
          {/* THICKNESS / SIDE WALL                                        */}
          {/* ============================================================ */}

          <ellipse
            cx="80"
            cy="68"
            rx="52"
            ry="45"
            fill={`url(#${id}-side)`}
            stroke={palette.dark}
            strokeWidth="2"
          />

          {/* Deep lower edge */}
          <path
            d="
              M 28 65
              C 31 92 52 112 80 115
              C 108 117 132 98 133 70
              L 133 82
              C 131 111 107 130 79 127
              C 49 124 27 103 26 75
              Z
            "
            fill="#432705"
            opacity="0.65"
          />

          {/* Side-wall highlight */}
          <path
            d="
              M 31 72
              C 37 94 56 108 80 111
              C 103 113 123 99 129 79
            "
            fill="none"
            stroke={palette.highlight}
            strokeWidth="3"
            strokeOpacity="0.32"
          />

          {/* ============================================================ */}
          {/* OUTER FACE                                                   */}
          {/* ============================================================ */}

          <ellipse
            cx="80"
            cy="60"
            rx="52"
            ry="45"
            fill={`url(#${id}-outer)`}
            stroke="#FFE895"
            strokeOpacity="0.72"
            strokeWidth="2"
          />

          {/* ============================================================ */}
          {/* BEVELED FACE                                                 */}
          {/* ============================================================ */}

          <ellipse
            cx="80"
            cy="60"
            rx="46"
            ry="39"
            fill={`url(#${id}-face)`}
          />

          {/* Outer bevel */}
          <ellipse
            cx="80"
            cy="60"
            rx="43"
            ry="36"
            fill="none"
            stroke={`url(#${id}-bevel)`}
            strokeWidth="4"
          />

          {/* Inner engraving ring */}
          <ellipse
            cx="80"
            cy="60"
            rx="35"
            ry="30"
            fill="none"
            stroke={palette.dark}
            strokeOpacity="0.28"
            strokeWidth="2"
          />

          {/* Inner metallic surface */}
          <ellipse
            cx="80"
            cy="60"
            rx="33"
            ry="28"
            fill={`url(#${id}-innerFace)`}
          />

          {/* ============================================================ */}
          {/* METALLIC REFLECTIONS                                         */}
          {/* ============================================================ */}

          <ellipse
            cx="54"
            cy="38"
            rx="25"
            ry="10"
            fill="#FFFFFF"
            opacity="0.17"
            transform="rotate(-25 54 38)"
            filter={`url(#${id}-highlight)`}
          />

          <ellipse
            cx="46"
            cy="32"
            rx="10"
            ry="4"
            fill="#FFFFFF"
            opacity="0.42"
            transform="rotate(-25 46 32)"
          />

          {/* Lower-right metallic shadow */}
          <path
            d="
              M 101 31
              C 119 41 128 56 126 71
              C 122 84 111 94 97 99
              C 112 86 119 72 117 57
              C 115 46 110 38 101 31
              Z
            "
            fill="#5A3508"
            opacity="0.18"
          />

          {/* ============================================================ */}
          {/* EMBOSSED VE — SHADOW                                         */}
          {/* ============================================================ */}

          <text
            x="80"
            y="68"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="25"
            fontWeight="900"
            letterSpacing="-1.8"
            fill="#4A2B05"
            opacity="0.58"
            transform="translate(2.2 3)"
          >
            VE
          </text>

          {/* ============================================================ */}
          {/* EMBOSSED VE — FACE                                           */}
          {/* ============================================================ */}

          <text
            x="80"
            y="65"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="25"
            fontWeight="900"
            letterSpacing="-1.8"
            fill={`url(#${id}-text)`}
          >
            VE
          </text>

          {/* VE highlight */}
          <text
            x="79"
            y="63"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="25"
            fontWeight="900"
            letterSpacing="-1.8"
            fill="#FFF4AE"
            opacity="0.24"
          >
            VE
          </text>

          {/* Specular point */}
          <circle
            cx="42"
            cy="34"
            r="2.5"
            fill="#FFFFFF"
            opacity="0.65"
          />
        </g>
      </svg>
    </div>
  );
}

/* ========================================================================== */
/* CLAPPERBOARD                                                               */
/* ========================================================================== */

function Clapperboard() {
  return (
    <div className={styles.watchAdClapperboard}>
      <svg
        viewBox="0 0 520 430"
        width="100%"
        height="100%"
        aria-hidden="true"
        overflow="visible"
      >
        <defs>
          <linearGradient
            id="board-front"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#416BAF" />
            <stop offset="38%" stopColor="#2C538F" />
            <stop offset="72%" stopColor="#1E3E70" />
            <stop offset="100%" stopColor="#142E59" />
          </linearGradient>

          <linearGradient
            id="board-front-light"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#7EA6E8"
              stopOpacity="0.38"
            />
            <stop
              offset="45%"
              stopColor="#5F88CA"
              stopOpacity="0.12"
            />
            <stop
              offset="100%"
              stopColor="#315B9E"
              stopOpacity="0"
            />
          </linearGradient>

          <linearGradient
            id="board-bottom-depth"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#1B3968" />
            <stop offset="45%" stopColor="#10294D" />
            <stop offset="100%" stopColor="#091A35" />
          </linearGradient>

          <linearGradient
            id="board-right-depth"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#254979" />
            <stop offset="55%" stopColor="#142F57" />
            <stop offset="100%" stopColor="#0A1B36" />
          </linearGradient>

          <linearGradient
            id="board-back"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#172F58" />
            <stop offset="100%" stopColor="#091A34" />
          </linearGradient>

          <linearGradient
            id="board-screen"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#345F9D" />
            <stop offset="50%" stopColor="#1C4076" />
            <stop offset="100%" stopColor="#10294F" />
          </linearGradient>

          <linearGradient
            id="screen-inner"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#2C568F" />
            <stop offset="100%" stopColor="#122E59" />
          </linearGradient>

          <radialGradient
            id="screen-glow"
            cx="50%"
            cy="42%"
            r="65%"
          >
            <stop
              offset="0%"
              stopColor="#76A9FF"
              stopOpacity="0.24"
            />
            <stop
              offset="55%"
              stopColor="#4E83D9"
              stopOpacity="0.08"
            />
            <stop
              offset="100%"
              stopColor="#315FAD"
              stopOpacity="0"
            />
          </radialGradient>

          <linearGradient
            id="clapper-front"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#EDF4FF" />
            <stop offset="28%" stopColor="#C8D8F2" />
            <stop offset="62%" stopColor="#91ACD7" />
            <stop offset="100%" stopColor="#6786BB" />
          </linearGradient>

          <linearGradient
            id="clapper-depth"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="0%" stopColor="#6E8FC4" />
            <stop offset="100%" stopColor="#243E6B" />
          </linearGradient>

          <linearGradient
            id="clapper-dark-stripe"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#314B78" />
            <stop offset="100%" stopColor="#182D50" />
          </linearGradient>

          <linearGradient
            id="metal-edge"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#FFFFFF"
              stopOpacity="0.72"
            />
            <stop
              offset="35%"
              stopColor="#D7E6FF"
              stopOpacity="0.22"
            />
            <stop
              offset="100%"
              stopColor="#7193C8"
              stopOpacity="0.5"
            />
          </linearGradient>

          <radialGradient
            id="board-ambient"
            cx="50%"
            cy="48%"
            r="58%"
          >
            <stop
              offset="0%"
              stopColor="#397CFF"
              stopOpacity="0.28"
            />
            <stop
              offset="52%"
              stopColor="#2862D5"
              stopOpacity="0.10"
            />
            <stop
              offset="100%"
              stopColor="#1B4FAE"
              stopOpacity="0"
            />
          </radialGradient>

          <radialGradient
            id="ground-glow"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop
              offset="0%"
              stopColor="#000B1D"
              stopOpacity="0.75"
            />
            <stop
              offset="100%"
              stopColor="#000B1D"
              stopOpacity="0"
            />
          </radialGradient>

          <filter
            id="board-shadow"
            x="-30%"
            y="-30%"
            width="160%"
            height="180%"
          >
            <feDropShadow
              dx="0"
              dy="24"
              stdDeviation="18"
              floodColor="#020A18"
              floodOpacity="0.72"
            />
          </filter>

          <filter
            id="soft-glow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="18" />
          </filter>

          <filter
            id="small-shadow"
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            <feDropShadow
              dx="0"
              dy="5"
              stdDeviation="5"
              floodColor="#020814"
              floodOpacity="0.45"
            />
          </filter>
        </defs>

        {/* Ambient glow */}
        <ellipse
          cx="265"
          cy="246"
          rx="225"
          ry="170"
          fill="url(#board-ambient)"
          filter="url(#soft-glow)"
        />

        <ellipse
          cx="275"
          cy="390"
          rx="165"
          ry="24"
          fill="url(#ground-glow)"
          filter="url(#soft-glow)"
        />

        {/* ================================================================ */}
        {/* BOARD DEPTH                                                      */}
        {/* ================================================================ */}

        <g filter="url(#board-shadow)">
          {/* Rear silhouette */}
          <path
            d="
              M 105 145
              L 389 120
              L 417 286
              L 133 324
              Z
            "
            fill="url(#board-back)"
            stroke="#0A1A34"
            strokeWidth="4"
          />

          {/* Bottom extrusion */}
          <path
            d="
              M 133 304
              L 417 267
              L 417 286
              L 133 324
              Z
            "
            fill="url(#board-bottom-depth)"
          />

          {/* Right extrusion */}
          <path
            d="
              M 389 120
              L 417 101
              L 444 267
              L 417 286
              Z
            "
            fill="url(#board-right-depth)"
          />

          {/* Right highlight */}
          <path
            d="
              M 389 121
              L 417 102
              L 418 115
              L 396 130
              Z
            "
            fill="#7EA4E2"
            opacity="0.32"
          />

          {/* Bottom highlight */}
          <path
            d="
              M 133 305
              L 417 268
              L 417 276
              L 135 314
              Z
            "
            fill="#5E82BC"
            opacity="0.24"
          />

          {/* ============================================================ */}
          {/* FRONT FACE                                                   */}
          {/* ============================================================ */}

          <path
            d="
              M 101 130
              L 389 105
              L 417 267
              L 129 305
              Z
            "
            fill="url(#board-front)"
            stroke="url(#metal-edge)"
            strokeWidth="3"
          />

          <path
            d="
              M 102 131
              L 389 106
              L 395 139
              L 108 164
              Z
            "
            fill="url(#board-front-light)"
          />

          <path
            d="
              M 101 130
              L 129 305
            "
            stroke="#8DB3F0"
            strokeOpacity="0.38"
            strokeWidth="3"
            fill="none"
          />

          <path
            d="
              M 129 305
              L 417 267
            "
            stroke="#6F94D0"
            strokeOpacity="0.32"
            strokeWidth="2"
            fill="none"
          />

          {/* ============================================================ */}
          {/* SCREEN OUTER BEVEL                                           */}
          {/* ============================================================ */}

          <path
            d="
              M 142 164
              L 362 145
              L 384 254
              L 161 283
              Z
            "
            fill="#102B52"
            stroke="#7298D4"
            strokeOpacity="0.38"
            strokeWidth="3"
          />

          <path
            d="
              M 142 164
              L 362 145
              L 368 155
              L 148 175
              Z
            "
            fill="#88ADE6"
            opacity="0.25"
          />

          {/* ============================================================ */}
          {/* SCREEN                                                        */}
          {/* ============================================================ */}

          <path
            d="
              M 153 176
              L 351 159
              L 370 244
              L 171 269
              Z
            "
            fill="url(#board-screen)"
            stroke="#0C2242"
            strokeWidth="5"
          />

          <path
            d="
              M 160 183
              L 346 167
              L 363 238
              L 178 262
              Z
            "
            fill="url(#screen-inner)"
          />

          <path
            d="
              M 160 183
              L 346 167
              L 363 238
              L 178 262
              Z
            "
            fill="url(#screen-glow)"
          />

          <path
            d="
              M 161 184
              L 345 168
              L 347 178
              L 163 195
              Z
            "
            fill="#A7C7F7"
            opacity="0.13"
          />

          <path
            d="
              M 173 194
              L 337 180
              L 352 233
              L 186 255
              Z
            "
            fill="none"
            stroke="#82A8E4"
            strokeOpacity="0.18"
            strokeWidth="2"
          />

          {/* ============================================================ */}
          {/* PLAY BUTTON                                                   */}
          {/* ============================================================ */}

          <ellipse
            cx="261"
            cy="218"
            rx="36"
            ry="33"
            fill="#071A37"
            fillOpacity="0.58"
            stroke="#9CBDF2"
            strokeOpacity="0.26"
            strokeWidth="3"
          />

          <ellipse
            cx="257"
            cy="214"
            rx="31"
            ry="29"
            fill="#1C3E70"
            stroke="#80A6E4"
            strokeOpacity="0.18"
            strokeWidth="2"
          />

          <path
            d="
              M 249 195
              L 249 233
              L 278 214
              Z
            "
            fill="#FFFFFF"
            opacity="0.96"
          />

          {/* Lower board details */}
          <path
            d="
              M 158 276
              L 386 246
            "
            stroke="#8BAEE8"
            strokeOpacity="0.16"
            strokeWidth="2"
          />

          <path
            d="
              M 165 284
              L 390 254
            "
            stroke="#071A34"
            strokeOpacity="0.45"
            strokeWidth="3"
          />
        </g>

        {/* ================================================================ */}
        {/* TOP CLAPPER                                                     */}
        {/* ================================================================ */}

        <g
          transform="rotate(-10 252 117)"
          filter="url(#small-shadow)"
        >
          {/* Thickness */}
          <path
            d="
              M 72 104
              L 394 77
              L 403 98
              L 81 127
              Z
            "
            fill="url(#clapper-depth)"
            stroke="#1B3560"
            strokeWidth="2"
          />

          <path
            d="
              M 81 119
              L 403 91
              L 403 104
              L 81 133
              Z
            "
            fill="#1B3764"
          />

          {/* Front clap */}
          <path
            d="
              M 72 91
              L 394 64
              L 403 91
              L 81 119
              Z
            "
            fill="url(#clapper-front)"
            stroke="url(#metal-edge)"
            strokeWidth="3"
          />

          {/* Dark diagonal stripes */}
          <path
            d="
              M 104 88
              L 145 84
              L 113 116
              L 82 119
              Z
            "
            fill="url(#clapper-dark-stripe)"
          />

          <path
            d="
              M 178 82
              L 219 78
              L 187 110
              L 146 114
              Z
            "
            fill="url(#clapper-dark-stripe)"
          />

          <path
            d="
              M 252 76
              L 293 72
              L 261 104
              L 220 108
              Z
            "
            fill="url(#clapper-dark-stripe)"
          />

          <path
            d="
              M 326 70
              L 367 67
              L 335 98
              L 294 102
              Z
            "
            fill="url(#clapper-dark-stripe)"
          />

          {/* Metallic reflections */}
          <path
            d="
              M 76 91
              L 392 65
              L 394 72
              L 78 99
              Z
            "
            fill="#FFFFFF"
            opacity="0.38"
          />

          <path
            d="
              M 82 113
              L 400 86
              L 402 92
              L 83 120
              Z
            "
            fill="#FFFFFF"
            opacity="0.12"
          />
        </g>

        {/* ================================================================ */}
        {/* HINGE                                                           */}
        {/* ================================================================ */}

        <g filter="url(#small-shadow)">
          <circle
            cx="91"
            cy="118"
            r="16"
            fill="#19345E"
            stroke="#91B5EC"
            strokeOpacity="0.72"
            strokeWidth="3"
          />

          <circle
            cx="91"
            cy="118"
            r="10"
            fill="#355C96"
          />

          <circle
            cx="91"
            cy="118"
            r="4"
            fill="#C8DDFB"
            opacity="0.85"
          />

          <circle
            cx="88"
            cy="115"
            r="2"
            fill="#FFFFFF"
            opacity="0.55"
          />
        </g>
      </svg>
    </div>
  );
}

/* ========================================================================== */
/* MAIN ILLUSTRATION                                                          */
/* ========================================================================== */

const WatchAdIllustration = () => {
  return (
    <div className={styles.watchAdIllustration}>
      <div className={styles.watchAdAmbientGlow} />

      <span className={`${styles.watchAdSpark} ${styles.watchAdSparkOne}`} />
      <span className={`${styles.watchAdSpark} ${styles.watchAdSparkTwo}`} />
      <span
        className={`${styles.watchAdSpark} ${styles.watchAdSparkThree}`}
      />

      <Clapperboard />

      <div className={styles.watchAdCoinLeft}>
        <VECoin variant="gold" size={76} />
      </div>

      <div className={styles.watchAdCoinRight}>
        <VECoin variant="purple" size={72} />
      </div>

      <div className={styles.watchAdCoinBottom}>
        <VECoin variant="blue" size={58} />
      </div>
    </div>
  );
};

export default WatchAdIllustration;