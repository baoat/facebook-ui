import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

export const IconSearch = ({ classNames }) => (
  <svg fill="currentColor" viewBox="0 0 16 16" width="16" height="16" className={classNames}>
    <g fillRule="evenodd" transform="translate(-448 -544)">
      <g fillRule="nonzero">
        <path
          d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
          transform="translate(448 544)"
        ></path>
        <path
          d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
          transform="translate(448 544)"
        ></path>
        <path
          d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
          transform="translate(448 544)"
        ></path>
        <path
          d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
          transform="translate(448 544)"
        ></path>
      </g>
    </g>
  </svg>
);

export const BackIcon = ({ classNames }) => (
  <svg
    viewBox="0 0 20 20"
    width="20"
    height="20"
    fill="currentColor"
    className={classNames}
    // style="--color:var(--secondary-icon)"
  >
    <g fill-rule="evenodd" transform="translate(-446 -350)">
      <g fill-rule="nonzero">
        <path
          d="M100.249 201.999a1 1 0 0 0-1.415-1.415l-5.208 5.209a1 1 0 0 0 0 1.414l5.208 5.209A1 1 0 0 0 100.25 211l-4.501-4.501 4.5-4.501z"
          transform="translate(355 153.5)"
        ></path>
        <path d="M107.666 205.5H94.855a1 1 0 1 0 0 2h12.813a1 1 0 1 0 0-2z" transform="translate(355 153.5)"></path>
      </g>
    </g>
  </svg>
);

export const ClearIcon = ({ classNames }) => (
  <svg viewBox="0 0 20 20" width="12" height="12" fill="currentColor" className={classNames}>
    <path d="M15.543 3.043a1 1 0 1 1 1.414 1.414L11.414 10l5.543 5.542a1 1 0 0 1-1.414 1.415L10 11.414l-5.543 5.543a1 1 0 0 1-1.414-1.415L8.586 10 3.043 4.457a1 1 0 1 1 1.414-1.414L10 8.586l5.543-5.543z"></path>
  </svg>
);

export const HomeIcon = ({ classNames }) => (
  <svg viewBox="0 0 28 28" className={classNames} fill="currentColor" height="28" width="28">
    <path d="M17.5 23.979 21.25 23.979C21.386 23.979 21.5 23.864 21.5 23.729L21.5 13.979C21.5 13.427 21.949 12.979 22.5 12.979L24.33 12.979 14.017 4.046 3.672 12.979 5.5 12.979C6.052 12.979 6.5 13.427 6.5 13.979L6.5 23.729C6.5 23.864 6.615 23.979 6.75 23.979L10.5 23.979 10.5 17.729C10.5 17.04 11.061 16.479 11.75 16.479L16.25 16.479C16.939 16.479 17.5 17.04 17.5 17.729L17.5 23.979ZM21.25 25.479 17 25.479C16.448 25.479 16 25.031 16 24.479L16 18.327C16 18.135 15.844 17.979 15.652 17.979L12.348 17.979C12.156 17.979 12 18.135 12 18.327L12 24.479C12 25.031 11.552 25.479 11 25.479L6.75 25.479C5.784 25.479 5 24.695 5 23.729L5 14.479 3.069 14.479C2.567 14.479 2.079 14.215 1.868 13.759 1.63 13.245 1.757 12.658 2.175 12.29L13.001 2.912C13.248 2.675 13.608 2.527 13.989 2.521 14.392 2.527 14.753 2.675 15.027 2.937L25.821 12.286C25.823 12.288 25.824 12.289 25.825 12.29 26.244 12.658 26.371 13.245 26.133 13.759 25.921 14.215 25.434 14.479 24.931 14.479L23 14.479 23 23.729C23 24.695 22.217 25.479 21.25 25.479Z"></path>
  </svg>
);

export const HomeIconActive = ({ classNames }) => (
  <svg viewBox="0 0 28 28" className={classNames} fill="currentColor" height="28" width="28">
    <path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path>
  </svg>
);

export const WatchIcon = ({ classNames }) => (
  <svg viewBox="0 0 28 28" className={classNames} fill="currentColor" height="28" width="28">
    <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"></path>
  </svg>
);

export const WatchIconActive = ({ classNames }) => (
  <svg viewBox="0 0 28 28" className={classNames} fill="currentColor" height="28" width="28">
    <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75"></path>
  </svg>
);

export const MarketplaceIcon = ({ classNames }) => (
  <svg viewBox="0 0 28 28" className={classNames} fill="currentColor" height="28" width="28">
    <path d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"></path>
  </svg>
);

export const MarketplaceIconActive = ({ classNames }) => (
  <svg viewBox="0 0 28 28" width="28" height="28" fill="currentColor" className={classNames}>
    <path d="M4.581 1c-1.38 0-2.597.905-2.993 2.227l-.816 2.72A6.45 6.45 0 0 0 .5 7.8c0 1.425.573 2.716 1.501 3.655L2 11.5v4.57c0 1.355 0 2.471.119 3.355.124.928.396 1.747 1.053 2.403.656.657 1.475.928 2.403 1.053.884.12 2 .119 3.354.119h6.142c1.354 0 2.47 0 3.354-.119.928-.125 1.747-.396 2.403-1.053.657-.656.928-1.475 1.053-2.403.12-.884.119-2 .119-3.354V11.5l-.001-.045A5.183 5.183 0 0 0 23.5 7.8a6.47 6.47 0 0 0-.272-1.854l-.816-2.719A3.125 3.125 0 0 0 19.42 1H4.58zM20 12.716V16c0 1.442-.002 2.424-.1 3.159-.096.706-.263 1.033-.486 1.255-.222.223-.55.39-1.255.485-.551.074-1.24.094-2.159.1V17.5a2.5 2.5 0 0 0-2.5-2.5h-3A2.5 2.5 0 0 0 8 17.5v3.498c-.918-.005-1.608-.025-2.159-.099-.706-.095-1.033-.262-1.255-.485-.223-.222-.39-.55-.485-1.255C4.002 18.424 4 17.443 4 16v-3.284A5.192 5.192 0 0 0 5.7 13a5.18 5.18 0 0 0 3.15-1.062A5.18 5.18 0 0 0 12 13a5.18 5.18 0 0 0 3.15-1.062A5.18 5.18 0 0 0 18.3 13a5.2 5.2 0 0 0 1.7-.284zM14 21h-4v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V21z"></path>
  </svg>
);

export const GroupIcon = ({ classNames }) => (
  <svg viewBox="0 0 28 28" className={classNames} fill="currentColor" height="28" width="28">
    <path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path>
  </svg>
);

export const GameIcon = ({ classNames }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28" className={classNames}>
    <g fillRule="evenodd" transform="translate(-444 -204)">
      <g>
        <path
          fillRule="nonzero"
          d="M98.5 5.75v4a.75.75 0 1 0 1.5 0v-4a.75.75 0 1 0-1.5 0z"
          transform="translate(351.5 208.5)"
        ></path>
        <path
          fillRule="nonzero"
          d="M97.25 8.5h4a.75.75 0 1 0 0-1.5h-4a.75.75 0 1 0 0 1.5z"
          transform="translate(351.5 208.5)"
        ></path>
        <path
          fillRule="nonzero"
          d="M109.5 14.5h-10a7 7 0 0 1 0-14h10a7 7 0 0 1 0 14zm0-1.5a5.5 5.5 0 0 0 0-11h-10a5.5 5.5 0 0 0 0 11h10z"
          transform="translate(351.5 208.5)"
        ></path>
        <path
          d="M109 9.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m3-3a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
          transform="translate(351.5 208.5)"
        ></path>
      </g>
    </g>
  </svg>
);

export const MenuIcon = ({ classNames }) => (
  <svg fill="currentColor" viewBox="0 0 44 44" width="20" height="20" className={classNames}>
    <circle cx="7" cy="7" r="6"></circle>
    <circle cx="22" cy="7" r="6"></circle>
    <circle cx="37" cy="7" r="6"></circle>
    <circle cx="7" cy="22" r="6"></circle>
    <circle cx="22" cy="22" r="6"></circle>
    <circle cx="37" cy="22" r="6"></circle>
    <circle cx="7" cy="37" r="6"></circle>
    <circle cx="22" cy="37" r="6"></circle>
    <circle cx="37" cy="37" r="6"></circle>
  </svg>
);

export const MessageIcon = ({ classNames }) => (
  <svg viewBox="0 0 28 28" alt="" className={classNames} fill="currentColor" height="20" width="20">
    <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
  </svg>
);

export const Inbox = ({ classNames }) => (
  <svg viewBox="0 0 28 28" alt="" className={classNames} fill="currentColor" height="20" width="20">
    <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
  </svg>
);

export const AvatarIcon = ({ classNames, src }) => (
  <img width={28} height={28} src={src} alt="" className={classNames} />
);

export const Iconemty = ({ src, className }) => (
  <i
    style={{
      backgroundImage: `url(${src})`,
      width: '36px',
      height: '36px',
      display: 'inline-block',
      backgroundSize: '38px 570px',
      backgroundRepeat: 'no-repeat',
    }}
    className={className}
  ></i>
);

export const SeeMoreIcon = ({ classNames }) => (
  <svg fill="currentColor" viewBox="0 0 16 16" width="16px" height="16px" className={classNames}>
    <g fill-rule="evenodd" transform="translate(-448 -544)">
      <path
        fill-rule="nonzero"
        d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
      ></path>
    </g>
  </svg>
);

export const LiveStreamIcon = ({ src, className }) => (
  <i
    style={{
      backgroundImage: `url(${src})`,
      width: '24px',
      height: '24px',
      // display: 'inline-block',
      // backgroundSize: '38px 570px',
      // backgroundRepeat: 'no-repeat',
      objectFit: 'fill',
    }}
    className={className}
  ></i>
);

export const ImageAddVideoIcon = ({ src, className }) => (
  <i
    style={{
      backgroundImage: `url(${src})`,
      width: '24px',
      height: '24px',
      objectFit: 'fill',
    }}
    className={className}
  ></i>
);

export const FeelAddActionIcon = ({ src, className }) => (
  <i
    style={{
      backgroundImage: `url(${src})`,
      width: '24px',
      height: '24px',
      objectFit: 'fill',
    }}
    className={className}
  ></i>
);

export const ScrollRightIcon = ({ classNames }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={classNames}>
    <path d="M9.209 5.207 16 12l-6.791 6.793a1 1 0 1 0 1.415 1.414l7.5-7.5a1 1 0 0 0 0-1.414l-7.5-7.5a1 1 0 1 0-1.415 1.414z"></path>
  </svg>
);

export const ScrollLeftIcon = ({ classNames }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className={classNames}>
    <path d="M14.791 5.207 8 12l6.793 6.793a1 1 0 1 1-1.415 1.414l-7.5-7.5a1 1 0 0 1 0-1.414l7.5-7.5a1 1 0 1 1 1.415 1.414z"></path>
  </svg>
);

export const LikeIcon = ({ src, className }) => (
  <i
    style={{
      backgroundImage: `url(${src})`,
      width: '20px',
      height: '20px',
      display: 'inline-block',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0px -798px',
      objectFit: 'fill',
      filter: 'contrast(0.5)',
    }}
    className={className}
  ></i>
);
export const CommentIcon = ({ src, className }) => (
  <i
    style={{
      backgroundImage: `url(${src})`,
      width: '20px',
      height: '20px',
      display: 'inline-block',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0px -588px',
      objectFit: 'fill',
      filter: 'contrast(0.5)',
    }}
    className={className}
  ></i>
);
export const SendIcon = ({ src, className }) => (
  <i
    style={{
      backgroundImage: `url(${src})`,
      width: '20px',
      height: '20px',
      display: 'inline-block',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0px -205px',
      objectFit: 'fill',
      filter: 'contrast(0.5)',
    }}
    className={className}
  ></i>
);
export const ShareIcon = ({ src, className }) => (
  <i
    style={{
      backgroundImage: `url(${src})`,
      width: '20px',
      height: '20px',
      display: 'inline-block',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0px -924px',
      objectFit: 'fill',
      filter: 'contrast(0.5)',
    }}
    className={className}
  ></i>
);

export const AddStoryIcon = ({ classNames }) => (
  <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" className={classNames}>
    <g fill-rule="evenodd" transform="translate(-446 -350)">
      <g fill-rule="nonzero">
        <path d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z" transform="translate(354.5 159.5)"></path>
        <path d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z" transform="translate(354.5 159.5)"></path>
      </g>
    </g>
  </svg>
);

export const ThreeDotIcon = ({ classNames }) => (
  <svg
    viewBox="0 0 20 20"
    width="20"
    height="20"
    fill="currentColor"
    className={classNames}
    // style="--color:var(--secondary-icon)"
  >
    <g fill-rule="evenodd" transform="translate(-446 -350)">
      <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
    </g>
  </svg>
);

export const X = ({ classNames }) => (
  <svg
    viewBox="0 0 20 20"
    width="20"
    height="20"
    fill="currentColor"
    className={classNames}
    // style="--color:var(--secondary-icon)"
  >
    <path d="M15.543 3.043a1 1 0 1 1 1.414 1.414L11.414 10l5.543 5.542a1 1 0 0 1-1.414 1.415L10 11.414l-5.543 5.543a1 1 0 0 1-1.414-1.415L8.586 10 3.043 4.457a1 1 0 1 1 1.414-1.414L10 8.586l5.543-5.543z"></path>
  </svg>
);

export const HairIcon = ({ src, className }) => (
  <i
    style={{
      backgroundImage: `url(${src})`,
      width: '16px',
      height: '16px',
      display: 'inline-block',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0px -201px',
      objectFit: 'fill',
      filter: 'contrast(0.5)',
    }}
    className={className}
  ></i>
);
export const FaceSmileIcon = ({ src, className }) => (
  <i
    style={{
      backgroundImage: `url(${src})`,
      width: '16px',
      height: '16px',
      display: 'inline-block',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0px -286px',
      objectFit: 'fill',
      filter: 'contrast(0.5)',
    }}
    className={className}
  ></i>
);
export const CameraIcon = ({ src, className }) => (
  <i
    style={{
      backgroundImage: `url(${src})`,
      width: '16px',
      height: '16px',
      display: 'inline-block',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0px -252px',
      objectFit: 'fill',
      filter: 'contrast(0.5)',
    }}
    className={className}
  ></i>
);
export const GiftIcon = ({ src, className }) => (
  <i
    style={{
      backgroundImage: `url(${src})`,
      width: '16px',
      height: '16px',
      display: 'inline-block',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0px -303px',
      objectFit: 'fill',
      filter: 'contrast(0.5)',
    }}
    className={className}
  ></i>
);
export const TickerIcon = ({ src, className }) => (
  <i
    style={{
      backgroundImage: `url(${src})`,
      width: '16px',
      height: '16px',
      display: 'inline-block',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '0px -388px',
      objectFit: 'fill',
      filter: 'contrast(0.5)',
    }}
    className={className}
  ></i>
);
