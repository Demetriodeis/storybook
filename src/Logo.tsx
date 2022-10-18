import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement>{}

export function Logo(props : LogoProps) {
  return (
    <svg
      width={116}
      height={104}
      viewBox="0 0 116 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M116 52.101c0-7.684-9.623-14.967-24.377-19.483 3.404-15.038 1.891-27.002-4.777-30.832C85.31.887 83.512.462 81.55.462v5.272c1.088 0 1.962.213 2.695.615 3.216 1.844 4.611 8.867 3.523 17.899-.26 2.223-.685 4.563-1.205 6.951-4.635-1.135-9.695-2.01-15.015-2.577-3.192-4.374-6.502-8.346-9.836-11.822C69.42 9.636 76.656 5.71 81.574 5.71V.439c-6.503 0-15.015 4.634-23.621 12.673C49.346 5.12 40.834.532 34.332.532v5.273c4.894 0 12.153 3.902 19.861 11.018a111.678 111.678 0 00-9.765 11.8c-5.344.567-10.403 1.441-15.038 2.6a71.36 71.36 0 01-1.23-6.857c-1.11-9.032.26-16.054 3.453-17.922.71-.426 1.631-.615 2.719-.615V.556c-1.986 0-3.783.426-5.344 1.324-6.644 3.83-8.133 15.771-4.705 30.762C9.576 37.182 0 44.44 0 52.102c0 7.684 9.623 14.966 24.378 19.482-3.405 15.038-1.892 27.002 4.776 30.833 1.537.898 3.334 1.324 5.32 1.324 6.502 0 15.014-4.635 23.62-12.674 8.607 7.992 17.12 12.579 23.621 12.579 1.987 0 3.784-.425 5.344-1.324 6.644-3.83 8.134-15.77 4.705-30.761C106.424 67.044 116 59.762 116 52.1zm-30.785-15.77c-.875 3.05-1.963 6.194-3.192 9.339a111.829 111.829 0 00-3.098-5.675c-1.087-1.891-2.246-3.736-3.404-5.533 3.357.497 6.596 1.112 9.694 1.868zm-10.83 25.18c-1.844 3.193-3.735 6.22-5.698 9.033-3.523.307-7.093.473-10.687.473-3.57 0-7.14-.166-10.64-.45a130.34 130.34 0 01-5.722-8.984 123.142 123.142 0 01-4.918-9.41 123.3 123.3 0 014.894-9.435c1.845-3.192 3.736-6.219 5.699-9.032 3.523-.308 7.093-.473 10.687-.473 3.57 0 7.14.165 10.64.45a130.34 130.34 0 015.722 8.984 123.16 123.16 0 014.918 9.41 132.37 132.37 0 01-4.894 9.435zm7.638-3.073a101.337 101.337 0 013.263 9.41c-3.098.757-6.36 1.395-9.742 1.892 1.159-1.82 2.317-3.689 3.405-5.604a134.266 134.266 0 003.074-5.698zM58.047 83.667a97.477 97.477 0 01-6.573-7.567c2.128.095 4.303.166 6.502.166 2.223 0 4.422-.047 6.573-.166a92.279 92.279 0 01-6.502 7.567zM40.456 69.74c-3.358-.497-6.597-1.111-9.695-1.868.875-3.05 1.963-6.195 3.192-9.34.97 1.892 1.987 3.784 3.098 5.675a156.505 156.505 0 003.405 5.533zm17.473-49.204a97.495 97.495 0 016.573 7.566A146.336 146.336 0 0058 27.936c-2.223 0-4.422.048-6.573.166a92.296 92.296 0 016.502-7.566zM40.432 34.462c-1.159 1.821-2.317 3.689-3.405 5.604a133.709 133.709 0 00-3.074 5.675 101.336 101.336 0 01-3.262-9.41 114.81 114.81 0 019.741-1.869zM19.034 64.065c-8.37-3.57-13.785-8.252-13.785-11.964 0-3.712 5.415-8.417 13.785-11.964 2.033-.875 4.256-1.655 6.55-2.388 1.347 4.634 3.12 9.458 5.32 14.4-2.176 4.917-3.926 9.717-5.25 14.328a71.851 71.851 0 01-6.62-2.412zm12.72 33.788c-3.215-1.844-4.61-8.866-3.522-17.899.26-2.222.685-4.563 1.205-6.951 4.635 1.135 9.695 2.01 15.015 2.577 3.192 4.374 6.502 8.347 9.836 11.822-7.708 7.165-14.944 11.09-19.862 11.09-1.064-.024-1.962-.237-2.671-.639zM87.84 79.836c1.112 9.032-.26 16.055-3.452 17.923-.71.425-1.631.615-2.719.615-4.894 0-12.153-3.902-19.861-11.019a111.68 111.68 0 009.765-11.799c5.344-.567 10.403-1.442 15.038-2.6.544 2.388.97 4.681 1.23 6.88zm9.103-15.77c-2.033.874-4.255 1.654-6.549 2.387-1.348-4.634-3.121-9.457-5.32-14.4 2.175-4.917 3.925-9.717 5.25-14.328a75.024 75.024 0 016.643 2.412c8.37 3.57 13.785 8.252 13.785 11.964-.024 3.712-5.438 8.418-13.809 11.964z"
        fill="#81D8F7"
      />
    </svg>
  )
}
