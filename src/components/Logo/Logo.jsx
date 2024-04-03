import s from './Logo.module.scss';
import { routes } from '../../routes/BaseRoutes';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <Link to={routes.HOME} aria-label="site logo">
        <svg
          fill={s.logoPrimary}
          viewBox="7.214 3.885 305.772 87.68"
          xmlns="http://www.w3.org/2000/svg"
          width="120"
        >
          <path d="M78.612 36.823c-2.066-.672-4.335-1.253-6.755-1.741.789-2.353 1.438-4.629 1.893-6.765 1.655-7.779.816-12.891-2.427-14.78-.812-.475-1.747-.715-2.777-.715-1.524 0-3.256.543-5.128 1.557a3.932 3.932 0 00-2.435-.858c-2.204 0-3.99 1.802-3.99 4.028 0 .496.1.967.264 1.407-1.536 1.411-3.108 3.041-4.692 4.862-5.953-6.847-11.763-10.994-15.98-10.994-1.03 0-1.964.239-2.777.713-3.242 1.89-4.082 7.003-2.427 14.78.455 2.137 1.104 4.413 1.893 6.766-2.42.487-4.689 1.068-6.754 1.74-7.503 2.444-11.468 5.733-11.468 9.514 0 2.596 1.87 4.96 5.467 6.977-.076.31-.128.63-.128.965 0 2.223 1.788 4.027 3.993 4.027 1.486 0 2.767-.83 3.453-2.047 1.7.503 3.52.946 5.437 1.332-.79 2.353-1.438 4.629-1.893 6.764-1.654 7.782-.814 12.892 2.429 14.783.812.473 1.745.713 2.775.713 4.218 0 10.027-4.147 15.981-10.995 5.954 6.848 11.763 10.997 15.98 10.997 1.03 0 1.963-.242 2.775-.713 2.47-1.44 3.542-4.752 3.185-9.683a4.025 4.025 0 002.351-3.664 4 4 0 00-3.727-4.003 67.496 67.496 0 00-1.273-4.197c2.421-.488 4.69-1.069 6.755-1.741 7.502-2.444 11.467-5.733 11.467-9.515 0-3.781-3.965-7.07-11.467-9.514zM58.74 20.881c.64.44 1.412.7 2.244.7 2.205 0 3.992-1.805 3.992-4.03 0-.405-.077-.788-.187-1.156 1.449-.761 2.723-1.153 3.759-1.153.613 0 1.129.126 1.58.389 2.158 1.26 2.638 5.813 1.283 12.182-.457 2.149-1.12 4.448-1.932 6.83a95.025 95.025 0 00-9.592-1.103 96.528 96.528 0 00-5.75-7.857 58.861 58.861 0 014.603-4.802zm2.935 30.767a114.77 114.77 0 01-3.127 5.147 109.796 109.796 0 01-11.964 0 114.292 114.292 0 01-3.126-5.147 112.564 112.564 0 01-2.845-5.322 112.955 112.955 0 015.971-10.446 109.71 109.71 0 0111.964 0 114.292 114.292 0 015.972 10.446 111.802 111.802 0 01-2.845 5.322zm4.158-2.617a92.11 92.11 0 012.82 6.685 90.336 90.336 0 01-7.136.876c.754-1.213 1.5-2.457 2.232-3.736a117.66 117.66 0 002.084-3.825zm-8.94 10.258a91.338 91.338 0 01-4.327 5.828 91.102 91.102 0 01-4.326-5.828c1.426.055 2.868.085 4.326.085 1.458 0 2.9-.03 4.327-.085zm-13.276-2.698a89.964 89.964 0 01-7.138-.876c.8-2.133 1.739-4.37 2.822-6.685a114.414 114.414 0 002.085 3.825c.73 1.279 1.476 2.523 2.23 3.736zm-4.31-12.959a93.269 93.269 0 01-2.826-6.673 89.958 89.958 0 017.135-.875c-.755 1.213-1.5 2.457-2.232 3.735a118.336 118.336 0 00-2.077 3.813zm8.933-10.246a91.338 91.338 0 014.326-5.828 91.338 91.338 0 014.327 5.828c-1.427-.055-2.87-.085-4.328-.085-1.457 0-2.899.03-4.325.085zm15.509 6.433a116.886 116.886 0 00-2.232-3.736 90.28 90.28 0 017.134.875 93.25 93.25 0 01-2.825 6.673c-.664-1.27-1.35-2.541-2.077-3.812zM33.723 27.812c-1.356-6.369-.875-10.922 1.283-12.182.45-.263.968-.39 1.579-.39 3.16 0 8.499 3.594 14.41 10.441-1.93 2.365-3.862 5-5.748 7.857-3.351.22-6.572.593-9.593 1.103-.81-2.38-1.474-4.68-1.931-6.829zm-5.39 26.06c-.204-2.033-1.884-3.625-3.95-3.625-.992 0-1.888.38-2.587.985-2.8-1.55-4.35-3.252-4.35-4.895 0-3.328 6.338-6.907 16.634-8.944a97.18 97.18 0 003.848 8.944 97.082 97.082 0 00-3.848 8.945 61.367 61.367 0 01-5.747-1.41zm8.252 23.562c-.611 0-1.129-.127-1.58-.39-2.854-1.664-2.754-8.993.646-19.012 3.022.511 6.244.884 9.597 1.105a96.725 96.725 0 005.748 7.857c-5.913 6.847-11.252 10.44-14.411 10.44zm34.21-15.073a4.023 4.023 0 00-1.92 3.43c0 1.961 1.387 3.592 3.225 3.952.256 3.795-.419 6.394-1.976 7.301-.45.263-.965.39-1.578.39-3.159 0-8.497-3.593-14.41-10.44a96.874 96.874 0 005.75-7.857 95.055 95.055 0 009.595-1.105c.51 1.506.95 2.955 1.313 4.33zm.255-7.08a97.169 97.169 0 00-3.847-8.944 97.166 97.166 0 003.847-8.944c10.296 2.037 16.635 5.616 16.635 8.944 0 3.33-6.339 6.908-16.635 8.945z" />
          {/* <path d="M58.153 46.337a5.68 5.68 0 01-1.636 3.99 5.586 5.586 0 01-2.862 1.544 5.523 5.523 0 01-3.228-.321 5.557 5.557 0 01-1.813-1.223 5.617 5.617 0 01-1.211-1.83 5.67 5.67 0 01-.318-3.26 5.669 5.669 0 011.53-2.889 5.586 5.586 0 012.86-1.544 5.523 5.523 0 013.229.321 5.557 5.557 0 011.813 1.223 5.617 5.617 0 011.21 1.83 5.668 5.668 0 01.426 2.16z" />
          <path d="M125.603 71.178c-9.083 0-15.515-3.816-15.515-8.971-.066-2.477 1.392-4.887 4.442-5.49 2.785 2.88 6.697 4.285 10.808 4.285 3.846 0 5.769-1.339 5.769-3.548 0-6.628-17.505-4.418-17.571-19.548 0-8.77 5.9-15.665 17.504-15.665 9.15 0 14.654 4.284 14.654 10.175 0 4.151-2.586 6.896-6.697 6.896-.928 0-1.79-.134-2.851-.536l-.067-.067c.266-1.07.398-1.807.398-2.477 0-2.41-1.923-4.083-5.9-4.083-4.178 0-5.836 1.874-5.836 4.485 0 8.703 18.963 5.289 19.03 20.083 0 9.774-8.222 14.46-18.168 14.46zm34.403 0c-5.371 0-7.56-2.009-7.89-3.75l-6.565-30.526c2.254-1.74 4.84-3.28 7.957-3.28 2.85 0 4.243 1.338 4.575 3.548l3.58 24.033h.332l8.42-26.443c1.857-1.34 3.647-1.875 5.769-1.875 3.58 0 6.1 1.54 5.835 6.293l-13.261 30.058a20.522 20.522 0 01-8.752 1.942zm26.843-12.787c3.713 0 5.702 2.276 5.702 5.958 0 4.285-2.586 7.163-6.895 7.163-3.78 0-5.902-2.276-5.902-5.89 0-4.151 2.785-7.23 7.095-7.23zm37.85-37.49c4.111 0 6.564 2.545 6.233 6.026l-3.315 42.644c-.53.602-2.719 1.272-4.575 1.272-4.178 0-6.498-1.473-6.697-5.356h-.398c-1.393 3.414-5.304 5.49-9.813 5.49-6.498 0-11.935-4.15-11.935-16.268 0-12.72 5.967-21.757 15.582-21.757 5.57 0 7.492 2.946 8.155 5.356h.265l1.194-16.134c.53-.402 2.917-1.272 5.304-1.272zM210.775 61.94c2.918 0 5.503-2.276 6.233-7.498l.464-5.89c-.133-5.089-1.724-6.494-4.31-6.494-4.044 0-7.028 3.748-7.028 11.916 0 5.422 1.79 7.966 4.641 7.966zm36.723 9.239c-9.216 0-15.582-5.825-15.582-16.87 0-12.452 7.427-21.289 18.566-21.289 9.747 0 13.062 5.623 13.062 11.046 0 8.77-8.156 12.452-16.908 12.452-1.193 0-1.99-.134-2.652-.134-.066 2.209.862 5.69 5.768 5.69 2.984 0 5.172-1.071 8.023-4.017 1.724.536 3.448 2.009 3.448 4.486 0 5.221-6.697 8.636-13.725 8.636zm2.254-28.854c-2.85 0-5.37 2.544-5.503 7.699.796 0 1.26.134 2.056.134 4.442 0 6.497-2.21 6.497-4.686 0-1.808-.928-3.147-3.05-3.147zm28.369 28.854c-5.37 0-7.559-2.009-7.89-3.75l-6.565-30.526c2.255-1.74 4.84-3.28 7.957-3.28 2.851 0 4.244 1.338 4.575 3.548l3.58 24.033h.332l8.42-26.443c1.857-1.34 3.648-1.875 5.77-1.875 3.58 0 6.1 1.54 5.834 6.293l-13.26 30.058a20.522 20.522 0 01-8.753 1.942z" /> */}
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
