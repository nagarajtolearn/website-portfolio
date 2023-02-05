import React from "react";
import hello from "../../assets/hello.svg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="intro" className="intro__page" data-aos="fade-in">
      <div className="scroll__down">
        <div className="indicator">
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        className="intro__tagline"
        data-aos="zoom-in"
        data-aos-easing="ease"
        data-aos-delay="200"
        data-aos-duration="1000">
        <img className="hello" src={hello} alt="hello world" />
        <h1 className="quote">
          I want to make things that make a <span>difference</span>
        </h1>
      </div>

      <div className="signature">
        <svg
          className="shadow"
          width="173mm"
          height="111mm"
          version="1.1"
          viewBox="0 0 173 111"
          xmlns="http://www.w3.org/2000/svg">
          <clipPath id="clipPath1430">
            <path
              d="m75.687 130.37c-5.8928 6.8072-12.141 13.513-16.916 14.935-0.508 0.1524-1.016 0.2032-1.4732 0.2032-3.4036 0-5.8928-4.1656-6.5024-15.748-0.2032-3.5052-1.0668-4.9276-2.3368-4.9276h-0.0508c-2.032 0.1524-4.0132 6.35-6.0452 12.649-1.8796 5.6896-3.1496 10.312-3.3528 10.312-0.1524-0.254-0.4572-2.0828-0.4572-7.4168 0-4.6736 0.254-12.04 1.016-23.368v-0.254c0-0.508-0.1524-0.9652-0.508-1.27-0.0508-0.0508-0.1016-0.1016-0.2032-0.1524-0.254-0.1524-0.508-0.254-0.8128-0.254-0.6096 0-1.3716 0.4064-2.1336 1.2192-0.6604 0.7112-1.524 1.778-2.4892 3.2512-3.2512 4.8768-8.0264 13.818-10.922 24.486 0.1016-1.4224 0.254-2.9464 0.4064-4.4704 0.6604-5.6388 1.8796-11.735 4.0132-17.526 0.1524-0.4572 0.254-0.9652 0.254-1.3716 0-0.6604-0.1524-1.2192-0.4572-1.6256s-0.6604-0.7112-1.0668-0.8636c-0.254-0.1016-0.5588-0.1524-0.9144-0.1524-0.1524 0-0.3048 0-0.4572 0.0508-0.6604 0.2032-1.3716 0.6096-1.9812 1.4732-0.0508 0.10159-0.1016 0.20319-0.1524 0.25399-0.0508 0.1016-0.1524 0.254-0.254 0.4064-0.0508 0.1524-0.1524 0.3556-0.2032 0.508-0.0508 0-0.0508 0.0508-0.0508 0.1016-1.9304 4.4704-3.4544 14.834-3.8608 24.689-0.1016 1.8796-0.1524 3.7592-0.1524 5.5372 0 7.4168 0.762 13.919 2.5908 16.51 0.2032 0.3048 0.6096 0.5588 1.0668 0.5588h0.1524c0.6604-0.0508 1.27-0.6096 1.27-1.3716v-0.1016c-0.1524-1.3716-0.2032-2.6924-0.2032-4.064l0.0508-1.3208c0.0508-0.6604 0.0508-1.27 0.1016-1.8796 0.0508-1.27 0.2032-2.4892 0.3048-3.7592 1.778-14.935 8.4836-28.296 12.751-34.544 0.3556-0.508 0.6604-1.016 0.9652-1.4224-0.508 8.0772-0.762 14.326-0.762 19.05 0 9.398 0.9144 12.903 2.3368 13.005h0.0508c2.286 0 4.4704-6.7564 6.604-13.411l2.1336-6.4008c0.3556 5.7912 1.3208 10.058 2.8956 12.802 1.6256 2.794 3.7592 3.9624 6.096 3.9624 7.7724 0 18.085-12.395 21.641-16.51 0.254-0.254 0.3556-0.5588 0.3556-0.8636 0-0.4064-0.1524-0.762-0.4572-1.016-0.254-0.254-0.6096-0.3556-0.9144-0.3556-0.3556 0-0.7112 0.1524-0.9652 0.4572z"
              strokeWidth=".26458"
            />
            <path
              d="m92.807 119.75c-1.778 0-3.048 2.3876-3.7084 3.6068-0.3048 0.5588-0.6604 1.2192-1.0668 1.8796-1.6256-1.524-3.2512-2.1844-4.826-2.1844-1.9304 0-3.7592 1.016-5.4356 2.6416-2.8956 2.6924-5.2832 7.3152-6.5532 11.481-0.6604 2.1336-1.016 4.1656-1.016 5.8928 0 1.9304 0.4572 3.4036 1.4732 4.0132 0.3556 0.254 0.762 0.3556 1.2192 0.3556 5.1816 0 13.919-14.834 15.494-17.323 0.3048-0.5588 0.6604-1.1176 0.9652-1.6764-0.508 3.6068-0.7112 6.6548-0.7112 9.1948 0 2.9972 0.3048 5.334 0.8636 7.0612 0.9144 2.9464 2.5908 4.3688 4.6736 4.7244 0.254 0.0508 0.5588 0.0508 0.8636 0.0508h0.1524c1.524 0 2.794-0.6096 2.794-0.6096 0.8636-0.3048 1.7272-0.762 2.5908-1.27 5.4864-3.302 11.786-10.566 15.342-15.443 0.1524-0.254 0.254-0.508 0.254-0.8128 0-0.4064-0.2032-0.8128-0.5588-1.0668-0.254-0.2032-0.5588-0.3048-0.8128-0.3048-0.4064 0-0.8128 0.2032-1.0668 0.5588-3.4544 4.6736-9.4488 11.633-14.58 14.783-0.7112 0.4064-1.4224 0.762-2.0828 1.016-0.254 0.0508-0.4064 0.1016-0.6096 0.1016-0.1016 0-0.2032 0-0.3556-0.0508-0.508-0.0508-0.9144-0.3556-1.27-0.8128-0.4572-0.6096-0.8128-1.524-1.0668-2.5908-0.5588-1.9304-0.762-4.4704-0.762-7.3152 0-4.3688 0.508-9.4488 1.2192-14.376v-0.2032c0-0.6096-0.508-1.1684-1.1684-1.3208zm-6.5024 8.5852c-0.254 0.3556-0.0508 0.0508-0.254 0.3556-5.7912 9.4488-8.1788 12.903-10.16 14.478-0.0508-0.2032-0.0508-0.4064-0.0508-0.6604 0-4.318 4.7244-14.732 8.89-14.732 0.508 0 1.0668 0.2032 1.5748 0.5588z"
              strokeWidth=".26458"
            />
            <path
              d="m118.21 183c0.254 0 0.5588-0.0508 0.762-0.3048l0.0508-0.0508c0.4064-0.254 0.6096-0.7112 0.6096-1.1176 0-4.1148-1.3716-13.462-1.7272-26.772 1.4732 0.9652 3.5052 1.4732 5.9436 1.4732 8.7376 0 23.673-6.604 38.151-23.825 0.254-0.254 0.3556-0.5588 0.3556-0.8636 0-0.7112-0.6096-1.3208-1.3716-1.3208-0.3556 0-0.762 0.1524-1.0668 0.4572-13.97 16.561-28.042 22.86-35.966 22.86-3.6576 0-5.9436-1.27-5.9436-3.9624s2.4892-6.7056 7.2644-11.074c0.1524-0.1016 0.1524-0.1016 0.2032-0.2032 1.4732-1.3208 3.2004-2.7432 5.1816-4.1656 9.1948-6.8072 12.243-12.141 12.243-15.799 0-2.6416-1.4732-4.3688-3.9116-5.08l-0.2032-0.0508c-0.6096-0.1524-1.3208-0.254-2.0828-0.254-6.096 0-15.494 5.7404-19.507 19.812 1.1684-20.015 3.7084-39.726 6.096-45.314 0.0508-0.1016 0.0508-0.2032 0.0508-0.254 0.254-0.6604 0.3556-1.1684 0.3556-1.5748-0.1016-1.27-0.5588-1.8288-1.1684-1.8288s-1.1684 0.3048-2.54 1.9812c-1.5748 2.286-3.8608 5.8928-3.8608 6.7564 0 0.7112 0.6096 1.4224 1.3208 1.4224l0.3048-0.0508c-3.6576 15.392-5.2324 37.033-5.2324 54.966 0 19.456 1.3716 34.138 5.6896 34.138zm0.0508-40.843c1.2192-14.173 7.5184-21.996 13.259-25.044 1.7272-0.9144 3.6576-1.5748 5.08-1.5748 1.2192 0 2.0828 0.508 2.0828 1.8796 0 0.7112-0.254 1.6256-0.8128 2.8448-3.6576 7.9248-14.326 14.63-19.609 21.895z"
              strokeWidth=".26458"
            />
            <path
              d="m172.46 159.58c-0.4064 0.3048-0.8128 0.6604-0.9652 1.4224-0.0508 0.1016-0.0508 0.254-0.0508 0.3556 0 0.5588 0.4064 1.1176 1.016 1.27 0.1016 0 0.2032 0.0508 0.3048 0.0508 0.6096 0 1.1176-0.3556 1.27-0.9144l0.1016-0.0508c0.6604-0.4064 1.27-0.8128 1.27-1.6764 0-0.4064-0.1524-0.9652-0.508-1.6764-0.254-0.4064-0.7112-0.7112-1.2192-0.7112-0.2032 0-0.4064 0.0508-0.6096 0.1524-0.4572 0.2032-0.762 0.7112-0.762 1.2192 0 0.1524 0.0508 0.3556 0.1524 0.5588z"
              strokeWidth=".26458"
            />
          </clipPath>
          <path
            className="text"
            transform="translate(-9.2491 -78.104)"
            d="m30.522 105.55s-8.5646 20.533-9.226 25.73c-0.30227 2.375-1.5472 7.921-1.749 13.596-0.23988 6.7434 0.60761 13.669 0.86418 15.67 0.47247 3.6853 1.468 8.5198 1.468 8.5198s0.13838-18.914 1.3668-23.544c1.2284-4.6302 8.6935-21.356 8.6935-21.356s5.3328-7.9834 6.0887-7.3219c0.75595 0.66146 0.24238 4.4871 0.24238 6.9439s-1.1339 13.796-1.1339 13.796 0.0945 8.7407 0.33073 9.9219c0.23624 1.1812 1.2757 3.4963 2.4568 1.1339 1.1812-2.3624 3.1655-8.5517 3.1655-8.5517l2.7403-8.599s0.8457-3.3713 1.6016-4.269 1.8946 0.25302 1.9419 3.4186c0.04725 3.1656 0.61421 12.001 1.8426 13.418 1.2284 1.4174 4.7719 4.6775 7.7485 3.0711s8.6462-6.1894 8.6462-6.1894 2.3151-1.3702 3.9215-3.4018 8.169-14.212 12.61-12.369c4.4412 1.8426 3.69 2.7781 3.69 2.7781s-5.3862-1.4174-6.0949-0.70871c-0.7087 0.70871-8.0591 9.6269-8.1063 11.564-0.04725 1.9371-2.1935 4.6417-0.87059 5.7284 1.3229 1.0867 4.9137-0.7087 6.7091-2.9766s6.8508-10.914 6.8508-10.914l3.1656-4.2522s3.3073-2.7876 3.4963-3.8743c0.18899-1.0867-0.8032-1.8426-1.2284-1.3229-0.42523 0.51971-0.8977 19.891-0.56696 21.025 0.33073 1.1339 0.42522 4.9609 2.5986 5.4334 2.1734 0.47247 5.7641-0.66146 7.4178-1.9371 1.6536-1.2757 12.142-11.859 12.142-11.859s2.9293-2.4568 2.9293-3.4963c0-1.0394 1.3702-17.056 1.3702-17.056l1.6064-13.938 1.7009-9.2604s2.0316-2.5986 1.8899-3.4018c-0.14174-0.8032-1.2284-1.5119-1.2284-1.5119s-3.9215 5.6224-3.8743 6.2839c0.0472 0.66146 0.42522 1.2757 0.70871 1.6064 0.28348 0.33073-1.3229 11.717-1.3229 11.717l-2.5041 22.962-0.66146 22.49s0.33073 20.033 0.61421 20.93c0.28348 0.89769 1.7481 9.4022 2.1734 9.5911 0.42523 0.18899 1.2757 0.75595 1.5119 0.75595 0.23623 0 0.56696-0.7087 0.47247-1.4646-0.0945-0.75596-1.9844-14.788-1.9844-14.788l-0.61421-9.3077-0.75595-6.7091 1.0394-13.276 3.827-8.0792s3.7325-7.1107 5.2917-8.1029 8.3391-6.4256 11.245-5.5988c2.9057 0.82683 4.6302 2.9057 4.1577 4.5593-0.47247 1.6536-4.7483 8.3155-5.5752 9.0714s-10.583 9.5439-11.434 10.134c-0.85044 0.59059-8.4505 8.032-8.734 9.1659-0.28348 1.1339-1.4565 1.4174-0.88958 3.0238 0.56697 1.6064 7.4975 5.1972 9.6236 5.1499s12.142-3.1656 13.418-3.8743c1.2757-0.70871 11.434-7.276 12.379-8.3627 0.94494-1.0867 9.7801-9.1659 10.347-10.158 0.56697-0.99219 5.1027-7.3705 5.1027-7.3705l9.7523 33.457s0.33409 1.2695 0.0334 1.5368c-0.30068 0.26727-1.1025 0.80181-1.1025 0.80181s0.46772 0.30067-0.16705 0.60135c-0.63476 0.30068-1.2695 0.23386-1.2695 0.23386s-0.23386-0.16704-0.50113-0.66817 0.26727-1.0691 0.3675-1.2695c0.10022-0.20045 0.70158-0.80181 0.70158-0.80181s-0.36749-0.33409-0.26727-0.73499c0.10023-0.4009 0.50113-0.46772 0.80181-0.56795 0.30068-0.10022 0.93544 0.23386 1.1025 0.3675 0.16704 0.13363 1.7038 2.8063 1.7038 2.8063"
            clipPath="url(#clipPath1430)"
            fill="none"
            stroke="#babfb0"
            strokeWidth="5.865"
          />
        </svg>
      </div>
    </section>
  );
};

export default Intro;
