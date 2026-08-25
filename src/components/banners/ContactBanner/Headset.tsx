import { useId, type CSSProperties } from "react";

interface HeadsetProps {
  size?: number;
  className?: string;
  style?: CSSProperties;
  title?: string;
}

const Headset = ({
  size,
  className,
  style,
  title = "Support headset",
}: HeadsetProps) => {
  const rawId = useId();
  const id = rawId.replace(/:/g, "");

  const shellGradient = `${id}-shell`;
  const shellDarkGradient = `${id}-shell-dark`;
  const bandGradient = `${id}-band`;
  const cushionGradient = `${id}-cushion`;
  const cupGradient = `${id}-cup`;
  const rimGradient = `${id}-rim`;
  const hubGradient = `${id}-hub`;
  const micGradient = `${id}-mic`;
  const shadowGradient = `${id}-shadow`;

  const isDecorative = title === "";

  return (
    <svg
      className={className}
      style={{
        display: "block",
        width: size ? size : "100%",
        height: size ? size * (400 / 420) : "auto",
        overflow: "visible",
        ...style,
      }}
      viewBox="0 0 420 400"
      xmlns="http://www.w3.org/2000/svg"
      role={isDecorative ? undefined : "img"}
      aria-hidden={isDecorative ? true : undefined}
      aria-label={isDecorative ? undefined : title}
    >
      <defs>
        {/* ---------------------------------------------------------------- */}
        {/* Metallic outer shell                                             */}
        {/* ---------------------------------------------------------------- */}

        <linearGradient
          id={shellGradient}
          x1="0.08"
          y1="0.04"
          x2="0.92"
          y2="0.96"
        >
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="16%" stopColor="#e8edf7" />
          <stop offset="36%" stopColor="#b7c0d5" />
          <stop offset="58%" stopColor="#7e89a5" />
          <stop offset="80%" stopColor="#4c556f" />
          <stop offset="100%" stopColor="#252b3d" />
        </linearGradient>

        <linearGradient
          id={shellDarkGradient}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#8e99b4" />
          <stop offset="32%" stopColor="#56617d" />
          <stop offset="68%" stopColor="#30374d" />
          <stop offset="100%" stopColor="#171b29" />
        </linearGradient>

        {/* ---------------------------------------------------------------- */}
        {/* Headband                                                         */}
        {/* ---------------------------------------------------------------- */}

        <linearGradient
          id={bandGradient}
          x1="0"
          y1="0"
          x2="1"
          y2="0.5"
        >
          <stop offset="0%" stopColor="#626d88" />
          <stop offset="18%" stopColor="#aab3c9" />
          <stop offset="40%" stopColor="#f4f6fb" />
          <stop offset="56%" stopColor="#c5ccdc" />
          <stop offset="76%" stopColor="#7d87a2" />
          <stop offset="100%" stopColor="#444b62" />
        </linearGradient>

        {/* ---------------------------------------------------------------- */}
        {/* Ear cushions                                                      */}
        {/* ---------------------------------------------------------------- */}

        <radialGradient
          id={cushionGradient}
          cx="35%"
          cy="28%"
          r="78%"
        >
          <stop offset="0%" stopColor="#50566b" />
          <stop offset="38%" stopColor="#292d3d" />
          <stop offset="72%" stopColor="#12151f" />
          <stop offset="100%" stopColor="#05070c" />
        </radialGradient>

        <radialGradient
          id={cupGradient}
          cx="28%"
          cy="22%"
          r="88%"
        >
          <stop offset="0%" stopColor="#f6f8fc" />
          <stop offset="18%" stopColor="#dce2ee" />
          <stop offset="38%" stopColor="#aab3c9" />
          <stop offset="62%" stopColor="#69748f" />
          <stop offset="82%" stopColor="#3a4258" />
          <stop offset="100%" stopColor="#202638" />
        </radialGradient>

        <linearGradient
          id={rimGradient}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#f5f7fc" />
          <stop offset="30%" stopColor="#bbc4d8" />
          <stop offset="60%" stopColor="#67718b" />
          <stop offset="100%" stopColor="#2d3448" />
        </linearGradient>

        <radialGradient
          id={hubGradient}
          cx="28%"
          cy="20%"
          r="82%"
        >
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#d8deea" />
          <stop offset="62%" stopColor="#8993ab" />
          <stop offset="100%" stopColor="#41495f" />
        </radialGradient>

        <linearGradient
          id={micGradient}
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#f2f4f9" />
          <stop offset="35%" stopColor="#aeb7cb" />
          <stop offset="70%" stopColor="#626c86" />
          <stop offset="100%" stopColor="#30374b" />
        </linearGradient>

        {/* ---------------------------------------------------------------- */}
        {/* Ground shadow                                                     */}
        {/* ---------------------------------------------------------------- */}

        <radialGradient
          id={shadowGradient}
          cx="50%"
          cy="50%"
          r="50%"
        >
          <stop
            offset="0%"
            stopColor="#000000"
            stopOpacity="0.52"
          />
          <stop
            offset="65%"
            stopColor="#000000"
            stopOpacity="0.18"
          />
          <stop
            offset="100%"
            stopColor="#000000"
            stopOpacity="0"
          />
        </radialGradient>
      </defs>

      {/* ================================================================== */}
      {/* GROUNDING SHADOW                                                   */}
      {/* ================================================================== */}

      <ellipse
        cx="206"
        cy="372"
        rx="157"
        ry="21"
        fill={`url(#${shadowGradient})`}
      />

      {/* ================================================================== */}
      {/* BACK / LEFT EAR CUP                                                */}
      {/* ================================================================== */}

      <g>
        {/* Outer shell */}
        <ellipse
          cx="112"
          cy="239"
          rx="72"
          ry="83"
          fill={`url(#${shellGradient})`}
        />

        {/* Outer metallic rim */}
        <ellipse
          cx="112"
          cy="239"
          rx="68"
          ry="79"
          fill="none"
          stroke="#f4f6fb"
          strokeWidth="2.5"
          opacity="0.5"
        />

        <ellipse
          cx="112"
          cy="239"
          rx="63"
          ry="74"
          fill="none"
          stroke="#5e6881"
          strokeWidth="4"
          opacity="0.65"
        />

        {/* Cushion */}
        <ellipse
          cx="106"
          cy="239"
          rx="56"
          ry="67"
          fill={`url(#${cushionGradient})`}
        />

        {/* Inner ear opening */}
        <ellipse
          cx="100"
          cy="232"
          rx="31"
          ry="42"
          fill="#030508"
        />

        {/* Inner opening highlight */}
        <ellipse
          cx="96"
          cy="224"
          rx="21"
          ry="30"
          fill="#111521"
          opacity="0.75"
        />

        {/* Metallic highlight */}
        <path
          d="M58 208 C51 250 57 287 80 305"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.42"
        />

        {/* Deep side shadow */}
        <path
          d="M166 190 C180 226 180 266 163 292"
          fill="none"
          stroke="#05070c"
          strokeWidth="13"
          strokeLinecap="round"
          opacity="0.3"
        />
      </g>

      {/* ================================================================== */}
      {/* HEADBAND                                                           */}
      {/* ================================================================== */}

      <g>
        {/* Main thick band */}
        <path
          d="M82 181
             C88 78 145 8 207 5
             C263 2 317 69 322 163"
          fill="none"
          stroke={`url(#${bandGradient})`}
          strokeWidth="36"
          strokeLinecap="round"
        />

        {/* Dark inner channel */}
        <path
          d="M91 174
             C98 78 153 25 207 23
             C256 21 307 76 313 158"
          fill="none"
          stroke="#090c14"
          strokeWidth="13"
          strokeLinecap="round"
          opacity="0.72"
        />

        {/* Inner soft padding */}
        <path
          d="M98 164
             C105 88 158 39 207 38
             C249 37 294 82 305 151"
          fill="none"
          stroke="#242a3b"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Top metallic highlight */}
        <path
          d="M79 177
             C87 72 151 8 207 7
             C252 5 310 59 316 148"
          fill="none"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.78"
        />

        {/* Subtle lower band reflection */}
        <path
          d="M88 181
             C99 84 157 29 208 28"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.35"
        />
      </g>

      {/* ================================================================== */}
      {/* LEFT YOKE / SLIDER                                                 */}
      {/* ================================================================== */}

      <g>
        <rect
          x="69"
          y="166"
          width="33"
          height="58"
          rx="10"
          fill={`url(#${shellDarkGradient})`}
        />

        <rect
          x="73"
          y="170"
          width="8"
          height="50"
          rx="4"
          fill="#ffffff"
          opacity="0.18"
        />

        <rect
          x="70"
          y="181"
          width="30"
          height="4"
          rx="2"
          fill="#171c29"
          opacity="0.65"
        />

        <rect
          x="70"
          y="193"
          width="30"
          height="4"
          rx="2"
          fill="#171c29"
          opacity="0.65"
        />
      </g>

      {/* ================================================================== */}
      {/* RIGHT YOKE / SLIDER                                                */}
      {/* ================================================================== */}

      <g>
        <rect
          x="297"
          y="155"
          width="32"
          height="58"
          rx="10"
          fill={`url(#${shellDarkGradient})`}
        />

        <rect
          x="301"
          y="159"
          width="8"
          height="50"
          rx="4"
          fill="#ffffff"
          opacity="0.18"
        />

        <rect
          x="298"
          y="180"
          width="30"
          height="5"
          rx="2"
          fill="#171c29"
          opacity="0.55"
        />
      </g>

      {/* ================================================================== */}
      {/* FRONT / RIGHT EAR CUP                                              */}
      {/* ================================================================== */}

      <g>
        {/* Deep rear shadow */}
        <ellipse
          cx="257"
          cy="266"
          rx="105"
          ry="108"
          fill="#101522"
          opacity="0.7"
          transform="rotate(-4 257 266)"
        />

        {/* Main outer cup */}
        <ellipse
          cx="253"
          cy="258"
          rx="102"
          ry="101"
          fill={`url(#${cupGradient})`}
        />

        {/* Outer rim */}
        <ellipse
          cx="253"
          cy="258"
          rx="102"
          ry="101"
          fill="none"
          stroke="#171c2b"
          strokeWidth="4"
          opacity="0.6"
        />

        {/* Secondary metallic ring */}
        <ellipse
          cx="253"
          cy="258"
          rx="88"
          ry="87"
          fill="none"
          stroke={`url(#${rimGradient})`}
          strokeWidth="4"
          opacity="0.72"
        />

        {/* Inner cushion */}
        <ellipse
          cx="257"
          cy="260"
          rx="72"
          ry="73"
          fill={`url(#${cushionGradient})`}
        />

        {/* Cushion inner ring */}
        <ellipse
          cx="257"
          cy="260"
          rx="58"
          ry="60"
          fill="none"
          stroke="#3a4054"
          strokeWidth="5"
          opacity="0.65"
        />

        {/* Deep inner ear cavity */}
        <ellipse
          cx="257"
          cy="260"
          rx="44"
          ry="47"
          fill="#080b12"
        />

        {/* Inner cavity reflection */}
        <ellipse
          cx="247"
          cy="245"
          rx="28"
          ry="31"
          fill="#151a28"
          opacity="0.75"
        />

        {/* Outer highlight */}
        <path
          d="M185 207
             C171 247 176 290 203 320"
          fill="none"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.38"
        />

        {/* Right side depth */}
        <path
          d="M321 200
             C338 240 333 285 307 320"
          fill="none"
          stroke="#02040a"
          strokeWidth="15"
          strokeLinecap="round"
          opacity="0.28"
        />
      </g>

      {/* ================================================================== */}
      {/* FRONT HUB / HINGE                                                  */}
      {/* ================================================================== */}

      <g>
        <circle
          cx="278"
          cy="282"
          r="29"
          fill={`url(#${hubGradient})`}
        />

        <circle
          cx="278"
          cy="282"
          r="29"
          fill="none"
          stroke="#262d40"
          strokeWidth="2"
          opacity="0.6"
        />

        <circle
          cx="278"
          cy="282"
          r="14"
          fill="#4a536a"
        />

        <circle
          cx="274"
          cy="278"
          r="5"
          fill="#ffffff"
          opacity="0.38"
        />

        <path
          d="M248 248
             C251 255 257 260 264 263"
          fill="none"
          stroke="#f4f6fb"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.52"
        />
      </g>

      {/* ================================================================== */}
      {/* MICROPHONE BOOM                                                    */}
      {/* ================================================================== */}

      <g>
        {/* Main boom */}
        <path
          d="M259 312
             C239 336 202 349 164 361"
          fill="none"
          stroke={`url(#${micGradient})`}
          strokeWidth="11"
          strokeLinecap="round"
        />

        {/* Boom highlight */}
        <path
          d="M259 312
             C239 336 202 349 164 361"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.42"
        />

        {/* Mic housing */}
        <ellipse
          cx="143"
          cy="368"
          rx="21"
          ry="15"
          fill={`url(#${shellGradient})`}
          transform="rotate(-12 143 368)"
        />

        {/* Mic housing rim */}
        <ellipse
          cx="143"
          cy="368"
          rx="21"
          ry="15"
          fill="none"
          stroke="#1c2231"
          strokeWidth="2"
          opacity="0.5"
          transform="rotate(-12 143 368)"
        />

        {/* Mic grille */}
        <path
          d="M130 363
             C136 359 146 359 155 363"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
      </g>
    </svg>
  );
};

export default Headset;