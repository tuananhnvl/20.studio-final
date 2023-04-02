import React, { useEffect } from 'react'
import '.././styles/Products.css'
import Contact from '../components/Contact'
import useLocoScroll from '.././hooks/useLocoScroll';
import gsap,{Power2} from 'gsap'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Navbar from '../components/Navbar'
import Grid from '../components/Grid';
const images = {
    image1: require('.././asset/products/1.png'),
    image3: require('.././asset/products/2.png'),
    image2: require('.././asset/products/3.png'),
    image4: require('.././asset/products/4.png'),
    image5: require('.././asset/products/5.png'),
    image6: require('.././asset/products/6.png'),

};

gsap.registerPlugin(CSSRulePlugin,MotionPathPlugin);
export default function Products() {
   // useLocoScroll(true)


    useEffect(() => {

        let targets = gsap.utils.toArray('.box-trans');
        console.log(targets)

        gsap.timeline({})
        .set('#hippo',{
            scale: .25,
           
            duration:0
        })
     /*    .to('#path',{
            scale: .5,
            x: 200,
            y: 50,
           
            duration:1
        }) */
        .to(targets, {
            rotation: 360,
            transformOrigin: "50% 50%",
        
            stagger: 0.15,
            duration: 1
        })
        .to(targets, {
            attr:{rx:"10"},
            stagger: 0.15,
            duration:1,
            ease:Power2.easeIn
        })
        .fromTo(targets,{
            rotation: '0',
        }, {
            rotation: '90deg',
            transformOrigin: "50% 150%",
            duration: 1
        })
        //path d="m100,100c56 => x=100,y=100 , targets item now is rect , go get pos XY of rect
        // => arr [ ]
        .to(targets,{
            x: 0,
            y: 0,
            stagger: 0.15,
            ease: "power1.inOut",
            duration:1
        })
        .to(targets,{
            x: 50,
            y: 70,
            stagger: 0.15,
            ease: "power1.inOut",
            duration:1
        })
        .to(targets, {
            motionPath: {
                path: "#path",
                align: "#path",
                alignOrigin: [0.5, 0.5],
                autoRotate: true
            },
            transformOrigin: "50% 50%",
            duration: 5,
            stagger: 0.15,
            ease: "power1.inOut"
        })
        .to(targets,{
            attr:{rx:"0"},
            duration:4 
        },"<")
       

    }, [])


    return (
        <section className='container' data-scroll-section>
            <Navbar />
            <section >
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" id="svg-anime" data-name="Layer 2" viewBox="0 0 600 300">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <rect class="box-trans" x=".12" y=".12" width="20" height="20" />
                            <rect class="box-trans" x=".12" y="20.17" width="20" height="20" />
                            <rect class="box-trans" x="20.12" y="20.17" width="20" height="20" />
                            <rect class="box-trans" x="20.12" y=".12" width="20" height="20" />
                            <path id="path" d="m100,100c56.24-59.18,133.7-81.96,198.73-59.49,57.1,19.72,119.08,79.32,106.33,132.91-13.49,56.72-107.89,94.89-175.95,62.03-58.93-28.46-78.23-100.58-68.35-154.43C184.52,52.56,258.45-9.66,308.8,1.89c85.47,19.6,162.45,265.41,55.7,388.61-61.98,71.53-185.58,101.34-225.32,59.49-57.34-60.37,46.9-283.55,118.99-279.75,57.4,3.03,119.96,151.33,78.48,202.53-43.37,53.53-219.49,24.45-296.2-87.34C-12.13,208.82-12.2,101.83,36.65,6.95"/>
                            <path id="hippo" x='0' y ='0' class="st1" d="M148.802,244.876c2.737-36.735,16.107-69.079,40.099-97.061
  c27.038-31.596,60.924-47.386,101.629-47.386c15.481,0,38.483,2.447,69.024,7.287c30.541,4.886,53.533,7.278,69.033,7.278
  c23.693,0,57.868,8.847,102.526,26.477c7.914,3.009,17.471,11.239,28.701,24.59c6.381,7.886,16.256,19.769,29.616,35.568
  c3.036,2.139,6.998,5.316,11.865,9.595c4.859,4.223,8.194,6.063,9.997,5.456c0.616-1.84,2.149-4.4,4.578-7.735
  c1.214-1.225,1.962-1.832,2.261-1.832c0.935,0.607,1.831,1.215,2.747,1.832c0.906,0.616,1.205,2.419,0.906,5.456
  c-0.616,5.474-0.906,7.138-0.906,4.998c-0.327,3.056-0.757,5.008-1.373,5.952c-3.952,6.671-5.485,11.847-4.55,15.472
  c0.916,3.325,3.765,8.669,8.642,15.958c4.868,7.287,7.586,12.761,8.193,16.405c-0.299,2.728-0.43,7.119-0.43,13.211l-4.568,11.379
  c0,8.512,9.865,23.114,29.616,43.78c9.436,4.223,14.117,18.826,14.117,43.714c0,19.47-16.089,29.167-48.273,29.167
  c-4.26,0-8.81-0.13-13.678-0.467c-3.335-1.196-8.203-2.56-14.575-4.074c-7.586-0.934-12.761-3.494-15.48-7.773
  c-4.877-6.95-12.781-13.509-23.711-19.581c-1.823-0.878-4.485-4.223-7.979-10.016c-3.503-5.774-6.615-9.418-9.333-10.949
  c-2.719-1.495-6.68-1.813-11.856-0.878c-8.81,1.494-13.677,2.261-14.574,2.261c-2.139,0-5.25-0.598-9.343-1.831
  c-4.11-1.215-7.054-1.831-8.893-1.831c-2.112,9.735-2.589,19.152-1.364,28.252c0.298,2.448,1.831,4.428,4.559,5.923
  c4.27,3.046,6.531,4.709,6.849,5.045c2.718,2.111,5.615,5.605,8.642,10.445c0.616,1.849-0.523,4.952-3.419,9.342
  c-2.887,4.41-5.223,7.008-7.063,7.736c-1.813,0.785-5.765,1.178-11.847,1.178c-8.82,0-12.295,0.131-10.464,0.43
  c-12.145-1.831-18.984-2.878-20.516-3.158c-7.587-1.532-14.126-3.943-19.582-7.305c-2.756-1.813-5.913-10.333-9.557-25.524
  c-3.681-16.406-6.717-26.272-9.137-29.635c-0.598-0.896-1.355-1.326-2.261-1.326c-1.533,0-4.045,1.494-7.53,4.559
  c-3.494,2.99-5.858,4.652-7.054,5.008c-4.242,17.9-6.4,26.402-6.4,25.468c0,7.007,1.972,12.892,5.924,17.77
  c3.943,4.858,8.063,9.567,12.323,14.107c5.157,5.774,7.736,10.782,7.736,15.042c0,2.41-0.748,4.521-2.28,6.372
  c-6.381,7.885-17.022,11.847-31.905,11.847c-16.713,0-27.644-2.28-32.792-6.839c-6.699-5.774-10.949-11.865-12.762-18.199
  c-0.298-1.533-1.055-6.091-2.28-13.678c-0.607-4.578-1.98-7.287-4.082-8.184c-6.101-0.916-13.687-2.578-22.778-5.007
  c-1.841-1.215-3.811-4.26-5.942-9.118c-3.933-9.399-6.83-15.789-8.661-19.134c-9.128-4.56-23.702-9.698-43.761-15.453
  c-0.916,1.831-1.345,4.373-1.345,7.718c3.335,4.26,8.343,10.8,15.032,19.581c5.466,7.288,8.203,14.295,8.203,20.965
  c0,12.781-8.203,19.134-24.609,19.134c-12.453,0-20.955-0.878-25.523-2.709c-6.671-2.728-12.295-9.136-16.854-19.134
  c-7.596-16.742-11.847-26.159-12.762-28.27c-4.868-11.231-8.204-21.133-10.006-29.653c-1.233-6.055-3.064-15.35-5.485-27.804
  c-2.121-10.296-5.456-18.358-10.015-24.132C155.332,279.36,147.578,260.665,148.802,244.876z"/>
                        </g>
                    </svg>
                </div>
                <div className='products_banner' data-scroll-container>
                    <a><img src={images.image1} alt='' /></a>
                    <h2>SẢN XUẤT</h2>
                </div>

                <div className='products_banner-sub' data-scroll-container>
                    <a className='sub'>Từ nguyên liệu đến thành phẩm. Chúng tôi có thể cung cấp dịch vụ sản xuất thời trang.</a>
                    <a className='sub-next'>
                        <a>Quy trình làm việc</a>
                        <svg data-name="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 143.25 244.55">

                            <g id="arrow-svg" data-name="Layer-Main">
                                <ellipse className="cls-2" cx="71.62" cy="67.12" rx="71.5" ry="67" />
                                <rect className="cls-1" x="70.28" y="94.21" width=".5" height="150" />
                                <rect className="cls-1" x="59.75" y="218.43" width=".5" height="30" transform="translate(-147.49 110.79) rotate(-45)" />
                                <rect className="cls-1" x="80.81" y="218.76" width=".5" height="30" transform="translate(189.04 11.15) rotate(45)" />
                            </g>
                        </svg>
                    </a>
                </div>
                {/* list step ( 5 step ) */}
                <div className='wrapper-step-product' data-scroll-container>
                    <div className='step1-products consuctor--gridsys'>
                        <div className='img'>
                            <img src={images.image3} alt="" />
                        </div>
                        <div className='text'>
                            <div className="title">
                                Phát triên nguyên mẫu đầu tiên
                            </div>
                            <div className="des">
                                Với nhiều năm kinh nghiệm làm việc trong ngành, 20Studio có thể biến những thiết kế tinh xảo nhất thành sản phẩm may mẫu thực tế
                            </div>
                        </div>
                    </div>

                    <div className='step2-products consuctor--gridsys'>
                        <div className='img'>
                            <img src={images.image2} alt="" />
                        </div>
                        <div className='text'>
                            <div className="title">
                                Điều Chỉnh và Nhảy Rập
                            </div>
                            <div className="des">
                                Đảm bảo trang phục hoàn toàn vừa vặn với cơ thể và có thể mặc được đối với những đối tượng mục tiêu. Thiết kế sẽ được định cỡ với sự trợ giúp của nhân viên xếp nếp có kinh nghiệm và phần mềm thời trang tiên tiến
                            </div>
                        </div>
                    </div>

                    <div className='step3-products consuctor--gridsys'>
                        <div className='img'>
                            <img src={images.image4} alt="" />
                        </div>
                        <div className='text'>
                            <div className="title">
                                Lập Kế Hoạch Sản Xuất
                            </div>
                            <div className="des">
                                Lên lịch trước và cập nhật kế hoạch sản xuất theo thời gian thực. Khách hàng của chúng tôi luôn được chúng tôi thông báo
                            </div>
                        </div>
                    </div>

                    <div className='step4-products consuctor--gridsys'>
                        <div className='img'>
                            <img src={images.image5} alt="" />
                        </div>
                        <div className='text'>
                            <div className="title">
                                Kiểm Soát Chất Lượng

                            </div>
                            <div className="des">
                                We only delivery an impeccable quality product that fully reflect the prestige and quality of our customer
                            </div>
                        </div>
                    </div>

                    <div className='step5-products  consuctor--gridsys'>
                        <div className='img'>
                            <img src={images.image6} alt="" />
                        </div>
                        <div className='text'>
                            <div className="title">
                                Vận Chuyển
                            </div>
                            <div className="des">
                                Chỉ khi sản phẩm đạt chất lượng mới đến tay khách hàng, chúng tôi luôn theo dõi sát sao

                            </div>
                        </div>
                    </div>


                </div>

                <div className='gallery-togo' data-scroll-container>
                    <div className='text-svg'>
                        <svg width="1055" height="129" viewBox="0 0 1055 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_175_52)">
                                <path d="M54.4526 118.229L13.2956 33.6634C13.0774 33.1477 12.8789 32.6518 12.6606 32.136C12.4423 31.6202 12.2042 31.1243 11.9066 30.6085C9.78322 26.3833 6.01281 24.4591 0.615172 24.836H0.198443L0 21.8604L33.5963 19.6784L33.7948 22.5547L32.2271 22.6539C30.4808 22.7729 29.1314 23.4672 28.159 24.717C27.1866 25.9667 26.7699 27.2759 26.8493 28.6843C26.9088 29.4778 27.0874 30.192 27.3851 30.8863L61.3187 100.197C62.1125 97.8758 62.9261 95.5747 63.7397 93.3331C64.5534 91.0915 65.3471 88.8103 66.1607 86.4695L66.4981 85.6562V85.7951C66.7958 84.8032 67.1926 83.494 67.7483 81.8277C68.2841 80.1812 68.8397 78.4554 69.4351 76.6502C70.2288 74.2301 71.0027 71.9092 71.7767 69.6676C72.5506 67.426 73.0665 65.8986 73.3642 65.1051C74.2374 62.4271 74.8525 59.7293 75.2296 57.0314C75.6066 54.3336 75.7058 51.5961 75.5074 48.7991C75.17 44.0184 73.9992 39.2971 71.9751 34.6751C69.951 30.0531 67.0934 25.8873 63.4421 22.1977L63.3032 22.0786L76.0432 8.86719L76.3409 9.24409C79.1984 12.7156 81.421 16.5639 82.9887 20.7892C84.5564 25.0145 85.4692 29.2596 85.7669 33.5246C85.9852 36.6588 85.8462 39.6344 85.3303 42.4711C84.8342 45.3078 84.1793 48.0651 83.4054 50.7431C82.5521 53.5203 81.5797 56.2578 80.4883 58.9556C79.3969 61.6534 78.3451 64.4901 77.3331 67.4458L64.0573 105.235L70.3876 117.138L54.4526 118.248V118.229Z" fill="white" />
                                <path d="M95.3516 106.207L95.173 103.331H95.5699C97.9115 103.073 99.7769 102.2 101.126 100.672C102.476 99.1449 103.091 97.3794 102.972 95.3759L100.213 50.0285C100.174 49.5128 99.9555 49.0367 99.5387 48.6201C99.122 48.2035 98.606 48.025 97.9909 48.0647C97.6337 48.0845 97.2368 48.2035 96.7605 48.4019C96.2843 48.6003 95.7088 48.8185 95.0341 49.0367C94.4387 49.3342 93.8633 49.6318 93.3076 49.9293C92.752 50.2269 92.2757 50.4649 91.8392 50.6831L91.3232 50.8418L91.1248 47.4497L91.3827 47.3109C94.6967 45.6247 97.9909 43.8791 101.305 42.0541C104.599 40.229 107.873 38.4437 111.088 36.6782L111.604 36.3807L115.136 94.6618C115.255 96.6653 116.089 98.3514 117.617 99.7004C119.145 101.049 121.129 101.704 123.57 101.625H123.828L124.007 104.481L95.3714 106.227L95.3516 106.207ZM94.7959 23.4668L104.024 13.3301L114.541 22.2766L105.194 32.4133L94.8158 23.4668H94.7959Z" fill="white" />
                                <path d="M125.991 95.9119L136.945 84.9619L137.223 85.3388C138.275 86.8662 139.565 88.4532 141.093 90.1195C142.621 91.7858 144.347 93.3132 146.252 94.682C148.157 96.0706 150.221 97.2013 152.404 98.094C154.587 98.9866 156.77 99.3635 158.953 99.2445C162.961 99.0263 165.68 97.7567 167.069 95.4556C168.478 93.1545 169.093 90.4765 168.934 87.4216C168.815 85.1602 168.359 83.3154 167.585 81.9268C166.811 80.5184 165.759 79.3678 164.449 78.4355C163.14 77.5032 161.532 76.8089 159.687 76.3328C157.821 75.8567 155.698 75.4401 153.317 75.0434C150.32 74.5871 147.403 74.0317 144.565 73.3572C141.728 72.6828 139.128 71.7306 136.747 70.5007C134.365 69.2708 132.341 67.7037 130.655 65.7795C128.968 63.8553 127.718 61.4749 126.864 58.6382C126.666 58.2216 126.547 57.7455 126.527 57.2099L126.448 55.6428C126.269 52.5085 126.845 49.6917 128.154 47.2319C129.464 44.7523 131.25 42.6297 133.512 40.8444C135.774 39.059 138.453 37.6506 141.549 36.5993C144.645 35.5677 147.879 34.9528 151.293 34.7544C153.555 34.6354 155.896 34.6751 158.317 34.8933C160.738 35.1115 163.12 35.5281 165.461 36.143C167.803 36.758 170.085 37.5316 172.268 38.4639C174.451 39.3963 176.376 40.5071 178.023 41.8164L178.301 42.0544L167.605 52.8656L167.327 52.4887C166.374 51.1398 165.144 49.6718 163.616 48.1047C162.088 46.5376 160.381 45.0895 158.536 43.8001C156.67 42.5107 154.726 41.4196 152.721 40.5667C150.717 39.7137 148.693 39.3368 146.689 39.4558C142.938 39.6542 140.378 40.884 139.009 43.1455C137.64 45.4069 137.044 47.9659 137.203 50.8422C137.322 53.0243 137.838 54.7898 138.731 56.1387C139.644 57.4876 140.835 58.5787 142.323 59.4118C143.811 60.245 145.498 60.8996 147.403 61.3757C149.308 61.8518 151.372 62.2287 153.575 62.5461C154.626 62.7444 155.738 62.9428 156.889 63.0816C158.04 63.2403 159.131 63.4189 160.203 63.6172C162.663 64.014 165.065 64.6289 167.386 65.4621C169.708 66.2952 171.792 67.4061 173.657 68.7947C175.522 70.1833 177.05 71.8694 178.261 73.8531C179.452 75.8368 180.146 78.2371 180.285 81.0143C180.464 84.4064 179.888 87.4613 178.559 90.1592C177.209 92.857 175.324 95.1581 172.903 97.0823C170.462 99.0065 167.605 100.514 164.291 101.605C160.977 102.696 157.444 103.351 153.714 103.549C148.653 103.827 143.772 103.351 139.069 102.121C134.365 100.891 130.139 98.8478 126.408 95.9912L126.011 95.8722L125.991 95.9119Z" fill="white" />
                                <path d="M187.27 101.069L187.131 98.193H187.528C189.87 97.9748 191.735 97.1218 193.104 95.6142C194.474 94.1065 195.109 92.3609 195.009 90.3375L192.866 44.9505C192.846 44.4347 192.628 43.9586 192.211 43.542C191.795 43.1255 191.279 42.9271 190.683 42.9668C190.326 42.9668 189.929 43.0858 189.453 43.2841C188.977 43.4825 188.401 43.6809 187.707 43.8991C187.111 44.1967 186.536 44.4744 185.98 44.7719C185.425 45.0695 184.929 45.3075 184.512 45.5059L183.996 45.6646L183.837 42.2725L184.095 42.1336C187.429 40.4871 190.763 38.7812 194.077 37.0157C197.411 35.2502 200.685 33.4847 203.92 31.7589L204.435 31.4811L207.194 89.8019C207.293 91.8055 208.087 93.4916 209.595 94.8604C211.103 96.2291 213.088 96.9036 215.528 96.8639H215.786L215.925 99.7204L187.27 101.069ZM187.806 18.3292L197.173 8.31152L207.571 17.3969L198.085 27.4146L187.826 18.3292H187.806Z" fill="white" />
                                <path d="M260.118 90.6153L259.999 90.7541C259.146 91.4881 258.352 92.0435 257.578 92.4204C256.824 92.9759 256.011 93.4916 255.157 93.9677C253.55 95.1778 251.705 96.3482 249.601 97.4789C247.498 98.6096 245.454 99.2245 243.449 99.3039C239.441 99.4626 236.147 98.8079 233.607 97.3003C231.047 95.7927 229.042 93.8289 227.594 91.3889C226.145 88.9688 225.133 86.2908 224.577 83.3946C224.022 80.4984 223.684 77.741 223.585 75.1226L222.156 41.241L213.385 41.598L233.666 15.8496L234.301 31.0249L260.079 29.9537L249.363 40.2293H249.224C246.684 40.2491 244.203 40.3086 241.763 40.4078C239.322 40.507 236.881 40.6062 234.44 40.7054L234.599 44.4942H234.738L236.127 77.4633C236.206 79.2883 236.424 81.0737 236.801 82.7995C237.179 84.5253 237.833 86.0924 238.766 87.5009C239.699 88.9093 240.969 90.0003 242.576 90.8136C244.184 91.6269 246.247 91.9642 248.787 91.865C250.177 91.8055 251.268 91.627 252.042 91.3294C252.816 91.0318 253.55 90.6549 254.225 90.1987C254.899 89.7424 255.673 89.2267 256.527 88.6514C256.963 88.453 257.38 88.2348 257.817 88.0166C258.233 87.7786 258.809 87.5604 259.483 87.362L259.999 87.2033L260.138 90.5954L260.118 90.6153Z" fill="white" />
                                <path d="M315.901 51.2189C315.762 45.1885 316.694 39.3762 318.699 33.7425C320.703 28.1088 323.699 23.1099 327.708 18.7259C331.717 14.3618 336.678 10.811 342.591 8.0933C348.505 5.37563 355.351 3.92753 363.13 3.749C370.889 3.57046 377.795 4.68133 383.847 7.12129C389.88 9.56124 394.98 12.8542 399.147 17.0398C403.315 21.2254 406.529 26.0855 408.792 31.6001C411.054 37.1347 412.264 42.9072 412.403 48.9377C412.542 54.9681 411.61 60.7804 409.605 66.4141C407.601 72.0478 404.605 77.0467 400.596 81.4307C396.587 85.7948 391.626 89.3456 385.713 92.0633C379.799 94.781 372.993 96.2291 365.313 96.4076C357.633 96.5862 350.747 95.4554 344.655 93.0353C338.563 90.5954 333.423 87.3024 329.216 83.1168C325.009 78.9312 321.775 74.091 319.512 68.5565C317.23 63.0219 316.04 57.2494 315.901 51.2189ZM370.036 91.5872C375.453 91.4682 379.998 90.278 383.709 88.0562C387.419 85.8345 390.396 82.978 392.678 79.5263C394.96 76.0747 396.568 72.2858 397.52 68.1399C398.473 64.0138 398.889 59.9869 398.81 56.0592C398.731 52.8257 398.294 49.4138 397.52 45.8034C396.726 42.1931 395.556 38.6224 393.988 35.0915C392.42 31.5406 390.535 28.1485 388.312 24.8754C386.09 21.6023 383.47 18.7656 380.454 16.3455C377.418 13.9254 374.064 12.0012 370.353 10.5531C366.642 9.10499 362.574 8.45036 358.129 8.54955C352.712 8.66857 348.167 9.87863 344.457 12.14C340.746 14.4015 337.789 17.258 335.547 20.67C333.304 24.0819 331.717 27.851 330.764 31.977C329.812 36.1031 329.375 40.0904 329.474 43.9189C329.554 47.0532 329.97 50.4255 330.764 54.0358C331.538 57.6461 332.709 61.2366 334.237 64.8271C335.765 68.4176 337.65 71.8494 339.912 75.1027C342.174 78.3758 344.794 81.2323 347.771 83.6921C350.747 86.1519 354.101 88.0959 357.792 89.544C361.503 90.9921 365.571 91.6467 370.016 91.5476L370.036 91.5872Z" fill="white" />
                                <path d="M473.186 93.7693L473.047 80.6769C471.043 82.0059 469.078 83.3549 467.134 84.7236C465.189 86.0924 463.165 87.4016 461.081 88.6513C458.819 89.9011 456.477 90.9326 454.037 91.7459C451.596 92.5592 448.937 92.9758 446.059 93.0155C441.951 93.0552 438.598 92.341 436.018 90.8334C433.418 89.3258 431.414 87.3818 430.005 85.0013C428.576 82.6209 427.624 79.9826 427.108 77.1062C426.592 74.2298 426.334 71.4328 426.294 68.735L425.977 37.7099C425.977 36.7578 425.481 35.8453 424.508 34.9724C423.536 34.1194 422.564 33.3855 421.611 32.7705L421.075 32.5126L421.591 32.2548C424.29 31.005 426.929 29.7553 429.549 28.5056C432.148 27.2558 434.807 26.0061 437.506 24.7564L438.022 24.4985L438.498 69.5285C438.518 71.532 438.756 73.5356 439.213 75.5391C439.669 77.5426 440.423 79.328 441.495 80.8752C442.567 82.4424 443.995 83.7119 445.801 84.6839C447.607 85.6758 449.849 86.1519 452.568 86.1122C454.572 86.0924 456.497 85.7155 458.323 85.0013C460.149 84.2872 461.895 83.3945 463.542 82.3233C465.268 81.2521 466.896 80.1413 468.424 78.9907C469.932 77.8402 471.48 76.769 473.047 75.797L472.65 37.1743C472.65 36.2222 472.154 35.3097 471.182 34.4368C470.21 33.5838 469.277 32.8499 468.404 32.2349L467.868 31.977L468.384 31.7192C471.083 30.4694 473.722 29.2197 476.341 27.97C478.941 26.7202 481.6 25.4705 484.299 24.2208L484.815 23.9629L485.41 80.657C485.41 81.4505 485.906 82.3035 486.879 83.2557C487.851 84.2079 488.724 84.9418 489.518 85.4576L489.915 85.7155L473.226 93.7495L473.186 93.7693Z" fill="white" />
                                <path d="M499.123 92.6391V89.7627H499.381C501.821 89.6833 503.746 88.9097 505.135 87.4616C506.525 86.0135 507.239 84.3075 507.239 82.2841V42.3523C507.239 41.5588 507.179 40.6463 507.041 39.5949C506.902 38.5436 506.663 37.5914 506.326 36.7186C505.969 35.8457 505.473 35.1118 504.818 34.4968C504.163 33.8819 503.31 33.5843 502.258 33.5843C501.464 33.5843 500.651 33.8025 499.778 34.2389C499.341 34.4175 498.904 34.6357 498.468 34.8936C498.031 35.1514 497.595 35.3696 497.158 35.5482L496.761 35.687L494.936 32.8107L512.617 24.4395L512.875 24.6973C515.236 26.9588 516.863 29.1408 517.796 31.2435C518.709 33.3463 519.265 35.8259 519.423 38.7023C520.912 37.0359 522.46 35.3895 524.067 33.7232C525.674 32.0569 527.401 30.5889 529.246 29.2797C531.092 27.9704 533.017 26.8992 535.08 26.0661C537.124 25.2329 539.387 24.8164 541.828 24.8164C544.963 24.8164 547.682 25.4313 549.944 26.6414C550.559 26.9984 551.115 27.3158 551.65 27.6332C552.166 27.9506 552.742 28.268 553.357 28.6251C553.873 29.0615 554.409 29.4582 554.925 29.7954C555.441 30.1525 556.016 30.5492 556.631 30.9658L556.889 31.2237L546.273 40.9042L539.724 34.4968C538.335 33.1876 536.708 32.5329 534.882 32.5329C533.394 32.5329 532.005 32.9694 530.695 33.8422C528.512 35.33 526.547 37.0359 524.801 38.9403C523.055 40.8645 521.309 42.7887 519.562 44.693V82.2643C519.562 84.2678 520.237 85.9738 521.586 87.3624C522.936 88.751 524.841 89.5445 527.282 89.723L527.679 89.8619V92.6192H499.123V92.6391Z" fill="white" />
                                <path d="M652.082 50.3857L656.468 46.5373L704.134 47.43L703.459 83.4341C703.459 83.9499 703.618 84.4656 703.955 84.9417C704.292 85.4376 704.729 85.6757 705.245 85.6955C705.503 85.6955 705.741 85.6558 705.959 85.5765C706.178 85.4972 706.376 85.4178 706.555 85.3186L706.952 85.0607L708.083 87.6991L689.707 97.0423L689.945 84.6045C685.679 88.5322 680.856 91.3887 675.498 93.1741C670.14 94.9594 664.306 95.7727 658.036 95.6735C650.177 95.5347 643.212 94.0866 637.159 91.3491C631.087 88.6116 626.027 85.0409 621.959 80.5974C617.891 76.1539 614.815 71.0558 612.751 65.3031C610.667 59.5504 609.695 53.6191 609.814 47.5093C609.933 41.3202 611.124 35.4087 613.426 29.775C615.708 24.1413 618.962 19.2019 623.189 14.9568C627.416 10.7117 632.615 7.33938 638.767 4.83992C644.918 2.34046 651.943 1.15024 659.782 1.30893C662.838 1.36844 666.112 1.72551 669.585 2.39997C673.058 3.07443 676.451 4.08611 679.745 5.39535C683.039 6.72443 686.036 8.33123 688.754 10.2157C691.473 12.1003 693.497 14.322 694.847 16.881L694.966 17.0198L694.827 17.2777C692.525 19.2416 690.203 21.2253 687.901 23.2288C685.599 25.2324 683.238 27.2161 680.856 29.1799L680.202 29.6957V28.9022C680.36 25.768 679.805 22.8321 678.554 20.0946C677.304 17.3571 675.498 14.9568 673.196 12.8541C670.895 10.7513 668.116 9.12471 664.902 7.91465C661.687 6.72443 658.214 6.08965 654.464 6.0103C648.967 5.91112 644.303 6.9228 640.453 9.02553C636.624 11.1282 633.488 13.8856 631.067 17.2976C628.646 20.7095 626.86 24.4785 625.689 28.6642C624.519 32.8299 623.903 36.8767 623.824 40.8044C623.745 45.6049 624.459 50.9014 626.027 56.6938C627.575 62.4862 629.956 67.9017 633.19 72.9403C636.405 77.9789 640.513 82.224 645.474 85.6757C650.435 89.1273 656.309 90.9127 663.116 91.0515C668.612 91.1507 673.097 90.0795 676.53 87.8379C679.983 85.5963 682.662 82.7398 684.607 79.2882C686.552 75.8365 687.901 72.008 688.675 67.8422C689.449 63.6765 689.866 59.7487 689.945 56.0789C689.945 55.2061 689.945 54.3729 689.945 53.5993C689.905 52.8058 689.866 51.9925 689.786 51.1196L652.082 50.4253V50.3857Z" fill="white" />
                                <path d="M767.715 99.3437V98.6891C767.873 94.067 768.012 89.5045 768.112 85.0214C768.211 80.5184 768.37 75.9757 768.608 71.3537C767.298 73.754 765.651 76.4716 763.627 79.5067C761.603 82.5418 759.321 85.3983 756.741 88.0564C754.161 90.7146 751.383 92.9363 748.406 94.6622C745.43 96.4078 742.354 97.2211 739.218 97.1219C735.726 97.0029 732.491 96.388 729.515 95.2374C726.538 94.0869 723.978 92.5594 721.874 90.6154C719.751 88.6714 718.124 86.41 716.973 83.851C715.822 81.292 715.306 78.5148 715.405 75.5591C715.505 72.6828 716.318 69.9056 717.886 67.2474C719.354 64.7678 721.001 62.7246 722.807 61.1178C724.613 59.511 726.518 58.2216 728.562 57.2297C730.606 56.2379 732.729 55.5238 734.912 55.0675C737.115 54.6113 739.397 54.2939 741.758 54.1153C744.041 53.917 746.382 53.7979 748.783 53.7384C751.184 53.6789 753.566 53.5202 755.947 53.2425C758.309 53.064 760.63 52.7466 762.912 52.2903C765.195 51.8341 767.457 51.1199 769.659 50.1479C769.719 48.1444 769.58 46.2599 769.243 44.4944C768.905 42.7289 768.251 41.2411 767.298 39.9716C766.326 38.7218 765.016 37.7101 763.329 36.9563C761.642 36.2025 759.499 35.7859 756.88 35.7066C754.439 35.6272 751.919 35.8058 749.319 36.262C746.72 36.6984 744.12 37.3134 741.52 38.1069C738.921 38.9004 736.4 39.7732 733.96 40.7452C731.519 41.7172 729.237 42.6892 727.113 43.6811L726.855 43.8001L715.266 32.9493L715.802 32.8302C720.823 31.2433 725.943 30.0134 731.122 29.1207C736.301 28.228 741.56 27.871 746.878 28.0495C749.934 28.1487 753.07 28.6446 756.265 29.5175C759.46 30.4101 762.535 31.6202 765.452 33.1476C768.37 34.6751 771.029 36.4604 773.41 38.5036C775.791 40.5468 777.637 42.7289 778.966 45.03C779.959 46.8153 780.633 48.6205 781.03 50.4653C781.427 52.3102 781.566 54.1947 781.506 56.1189L780.534 86.6083C780.534 87.1241 780.673 87.62 781.01 88.0564C781.348 88.5127 781.824 88.7309 782.419 88.7507C782.856 88.7507 783.253 88.6515 783.61 88.3937L784.007 88.2746L785.098 90.9328L767.675 99.2842L767.715 99.3437ZM769.382 55.246C767.973 55.6428 766.564 55.9602 765.155 56.2181C763.746 56.4759 762.297 56.714 760.809 56.9322C759.142 57.0512 757.475 57.1702 755.808 57.2892C754.141 57.4083 752.474 57.4479 750.827 57.3884C747.95 57.2893 744.894 57.6463 741.679 58.4001C738.464 59.1738 735.746 60.3441 733.503 61.9311C731.975 63.0221 730.923 64.2124 730.308 65.5018C729.693 66.7912 729.376 68.3186 729.316 70.0643C729.257 71.7306 729.495 73.5159 729.991 75.4599C730.487 77.404 731.301 79.1893 732.372 80.8358C733.444 82.4822 734.833 83.851 736.5 84.9619C738.167 86.0529 740.131 86.648 742.413 86.7274C745.112 86.8067 747.612 86.2314 749.875 85.0015C752.137 83.7716 754.201 82.1847 756.046 80.2803C757.892 78.376 759.539 76.3129 760.968 74.0912C762.396 71.8694 763.607 69.8461 764.639 68.0607C766.028 65.6605 767.119 63.5776 767.913 61.8121C768.707 60.0466 769.203 57.8645 769.362 55.246H769.382Z" fill="white" />
                                <path d="M787.38 97.5782L787.499 94.563H787.896C790.337 94.682 792.282 94.0075 793.75 92.5793C795.199 91.151 795.973 89.445 796.052 87.4216L799.009 12.5965C799.009 12.0807 798.85 11.5848 798.473 11.1286C798.096 10.6723 797.6 10.4343 796.985 10.4144C796.29 10.3946 795.278 10.6128 793.949 11.0889C793.334 11.3269 792.718 11.565 792.143 11.803C791.567 12.0411 791.052 12.2394 790.615 12.3981L790.079 12.5171L790.218 8.98616H790.476C793.949 7.5579 797.402 6.12963 800.874 4.68153C804.347 3.25327 807.76 1.80517 811.134 0.376903L811.67 0L808.217 87.9176C808.137 89.8418 808.792 91.6073 810.162 93.2339C811.531 94.8605 813.416 95.6738 815.758 95.6738H816.155L816.035 98.6891L787.38 97.5584V97.5782Z" fill="white" />
                                <path d="M816.73 98.729L816.869 95.7138H817.266C819.707 95.8328 821.651 95.1782 823.12 93.7499C824.588 92.3217 825.362 90.6157 825.442 88.6121L828.696 13.787C828.716 13.2712 828.537 12.7753 828.18 12.319C827.803 11.8628 827.307 11.6248 826.712 11.6049C826.017 11.5851 825.005 11.7834 823.675 12.2595C823.06 12.4976 822.445 12.7356 821.87 12.9737C821.294 13.2117 820.778 13.4101 820.342 13.5688L819.806 13.668L819.965 10.137H820.223C823.695 8.72855 827.168 7.30028 830.641 5.89186C834.114 4.46359 837.547 3.05517 840.92 1.6269L841.456 1.25L837.626 89.1477C837.547 91.0719 838.182 92.8374 839.551 94.4641C840.92 96.0907 842.786 96.9238 845.147 96.9437H845.544L845.405 99.9787L816.75 98.729H816.73Z" fill="white" />
                                <path d="M865.388 78.1178C866.221 80.5181 867.313 82.9184 868.623 85.2988C869.952 87.6792 871.56 89.8415 873.465 91.7657C875.37 93.6898 877.612 95.3165 880.172 96.6257C882.732 97.935 885.57 98.6689 888.705 98.8276C890.789 98.9268 892.773 98.6491 894.658 97.9548C896.524 97.2605 898.21 96.348 899.719 95.1975C901.227 94.0469 902.497 92.698 903.529 91.1309C904.561 89.5638 905.315 87.9768 905.751 86.3303L905.89 86.0724L916.745 86.6279L916.467 87.1436C913.312 92.4004 908.847 96.3877 903.072 99.1054C897.298 101.823 890.868 103.013 883.804 102.656C878.049 102.359 872.988 101.168 868.643 99.0657C864.297 96.963 860.665 94.2453 857.788 90.9127C854.89 87.5801 852.767 83.7912 851.418 79.5857C850.068 75.3605 849.493 71.036 849.711 66.5925C849.949 62.0697 850.941 57.765 852.727 53.6985C854.513 49.6319 857.014 46.1009 860.229 43.0658C863.443 40.0308 867.313 37.7098 871.857 36.0634C876.402 34.4169 881.541 33.7424 887.296 34.04C895.135 34.4367 901.544 36.3609 906.485 39.8126C911.427 43.2642 915.455 47.8862 918.571 53.7381C918.729 54.0952 918.888 54.4721 919.047 54.8688C919.206 55.2656 919.265 55.6822 919.245 56.1186V56.2574L919.106 56.3765C916.249 57.4477 913.491 58.5585 910.812 59.6892C908.133 60.8199 905.414 61.9308 902.636 63.002L865.408 78.1376L865.388 78.1178ZM905.513 57.4873C904.66 55.1664 903.568 52.8851 902.199 50.6237C900.83 48.3623 899.203 46.3191 897.337 44.4743C895.472 42.6294 893.309 41.102 890.888 39.8919C888.467 38.6819 885.709 37.9876 882.672 37.8289C879.001 37.6503 875.985 38.3248 873.584 39.8522C871.183 41.3995 869.238 43.3634 867.71 45.7835C866.182 48.2036 865.09 50.8221 864.416 53.6786C863.741 56.5352 863.344 59.2131 863.225 61.7523C863.027 65.8585 863.423 70.0243 864.416 74.2694L905.533 57.4873H905.513Z" fill="white" />
                                <path d="M923.691 103.827L923.869 100.951H924.127C926.568 101.03 928.533 100.375 930.021 99.0266C931.509 97.6777 932.303 95.9915 932.422 93.988L934.843 54.1355C934.883 53.342 934.883 52.4295 934.823 51.3781C934.764 50.3268 934.585 49.3547 934.287 48.4621C933.99 47.5694 933.533 46.7958 932.918 46.1411C932.303 45.4865 931.469 45.1295 930.418 45.0699C929.624 45.0303 928.791 45.189 927.898 45.5659C927.441 45.7246 927.005 45.9031 926.548 46.1411C926.092 46.3792 925.655 46.5577 925.199 46.7164L924.802 46.8156L923.155 43.8202L941.312 36.54L941.55 36.8178C943.773 39.218 945.261 41.4993 946.055 43.6417C946.849 45.7841 947.226 48.3034 947.226 51.1996C948.813 49.6325 950.46 48.0653 952.167 46.5181C953.874 44.9708 955.699 43.5822 957.604 42.392C959.509 41.2017 961.514 40.2496 963.617 39.5354C965.721 38.8411 967.983 38.5634 970.424 38.7023C973.559 38.9006 976.218 39.6743 978.421 41.0232C979.016 41.4199 979.552 41.777 980.068 42.1142C980.584 42.4515 981.12 42.8085 981.715 43.2053C982.211 43.6814 982.707 44.0979 983.203 44.4748C983.7 44.8517 984.255 45.2882 984.831 45.7642L985.069 46.042L973.896 55.0678L967.745 48.2637C966.435 46.8751 964.848 46.1213 963.022 46.0023C961.534 45.9031 960.125 46.2602 958.755 47.0536C956.493 48.4026 954.429 49.9895 952.564 51.7947C950.699 53.5999 948.833 55.4249 946.988 57.23L944.706 94.7418C944.587 96.7453 945.162 98.491 946.432 99.9589C947.702 101.447 949.548 102.339 951.969 102.657L952.346 102.815L952.187 105.553L923.691 103.827Z" fill="white" />
                                <path d="M982.092 128.762L982.985 116.086L983.501 116.126C984.969 116.483 986.478 116.721 988.045 116.84C993.264 117.217 998.047 116.265 1002.35 114.043C1006.66 111.821 1010.17 108.905 1012.87 105.334L991.915 50.7033C991.26 48.8981 990.526 47.1524 989.732 45.4266C988.938 43.7008 988.164 41.9551 987.41 40.15L987.172 39.7334L1016.05 41.7766L1015.85 44.5141H1015.45C1012.99 44.4943 1010.91 44.9109 1009.2 45.744C1007.47 46.5772 1006.54 48.1443 1006.38 50.4057C1006.3 51.6356 1006.4 52.806 1006.72 53.9764C1007.04 55.1269 1007.41 56.337 1007.85 57.6065C1009.89 63.2601 1011.96 68.8739 1014.02 74.4481C1016.09 80.0223 1018.31 85.6362 1020.71 91.3294L1037.85 58.5389C1038.85 56.7734 1039.42 54.8095 1039.58 52.6274C1039.72 50.7231 1039.16 49.275 1037.91 48.303C1036.66 47.3508 1035.08 46.4383 1033.11 45.6051L1032.85 45.4465L1033.03 42.9668L1054.98 44.5141L1054.8 46.9937L1054.52 47.1128C1051.96 47.5492 1049.78 48.7989 1048.01 50.862C1046.25 52.925 1044.72 55.0079 1043.43 57.1106C1042.93 57.7851 1042.54 58.4794 1042.24 59.1935C1041.92 59.9076 1041.57 60.5622 1041.19 61.1574L1014.34 112.297C1013.03 114.836 1011.34 117.157 1009.32 119.3C1007.29 121.422 1004.97 123.267 1002.37 124.775C999.773 126.302 996.916 127.433 993.8 128.167C990.685 128.901 987.43 129.159 984.037 128.921L982.072 128.782L982.092 128.762Z" fill="white" />
                            </g>
                        </svg>
                    </div>
                    <div className='list-img'>
                        <a><img src={images.image1} alt='' /></a>
                        <a><img src={images.image2} alt='' /></a>
                        <a><img src={images.image3} alt='' /></a>
                        <a><img src={images.image4} alt='' /></a>
                        <a><img src={images.image5} alt='' /></a>
                        <a><img src={images.image6} alt='' /></a>
                    </div>
                </div>
                <Contact />
            </section>
            <Grid />
        </section>

    )
}
