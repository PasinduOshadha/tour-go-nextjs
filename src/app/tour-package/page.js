"use client";
import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import Breadcrumb from "@/components/common/Breadcrumb";
import QuantityCounter from "@/uitils/QuantityCounter";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Topbar from "@/components/topbar/Topbar";
import SelectComponent from "@/uitils/SelectComponent";
const Page = () => {
  const [isOpen, setOpen] = useState(false);
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });

  const [selValue, setselValue] = useState("");

  const [pasArr, setpasArr] = useState([])

  useEffect(() => {
    console.log("<><>", selValue)

    if (selValue) {
      var arr = new Array(selValue).fill(selValue);

      setpasArr(arr)

    }

  }, [selValue])


  const images = [
    {
      id: 1,
      imageBig: "/assets/img/innerpage/package-01.jpg",
    },
    {
      id: 2,
      imageBig: "/assets/img/innerpage/package-02.jpg",
    },
    {
      id: 3,
      imageBig: "/assets/img/innerpage/package-03.jpg",
    },
    {
      id: 4,
      imageBig: "/assets/img/innerpage/package-04.jpg",
    },
    {
      id: 5,
      imageBig: "/assets/img/innerpage/package-05.jpg",
    },
    {
      id: 6,
      imageBig: "/assets/img/innerpage/package-06.jpg",
    },
  ];
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb pagename="Tour Booking Form" pagetitle="Tour Booking Form" />
      <div className="package-details-area pt-120 mb-120 position-relative">
        <div className="container">

          <div className="row gy-5 gx-5">
            <div className="col-xl-8">
              <div className="inquery-form bg-light p-5">
                <div className="form-title"

                >
                  <h4 className="">Please complete the form for all the travellers</h4>
                  {/* <p>
                    Complete form for complaints or service inquiries; expect
                    prompt response via phone/email.
                  </p> */}
                  <div className="mt-4"></div>
                </div>
                <form

                >
                  <div className="row">



                    <div className="form-inner mb-20 col-lg-4">
                      <label>
                        Departure Date <span>*</span>
                      </label>
                      <input type="date" placeholder="Departure Date" />
                    </div>
                    <div className="form-inner mb-20 col-lg-4">
                      <label>
                        Return Date <span>*</span>
                      </label>
                      <input type="date" placeholder="Return Date" />
                    </div>
                    <div className="form-inner mb-20 col-lg-4">
                      <label>
                        Departure City <span>*</span>
                      </label>
                      <SelectComponent
                        options={["Tourist", "Business visa", "Student visa"]}
                        placeholder={["Departure City"]}
                      />
                    </div>
                    <div className="form-inner mb-20 col-lg-4">
                      <label>
                        Passengers  <span>*</span>
                      </label>
                      <SelectComponent
                        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                        placeholder={["Passengers"]}
                        setselValue={setselValue}
                      />
                    </div>
                    <div className="form-inner mb-20 col-lg-4">
                      <label>
                        Select room  <span>*</span>
                      </label>
                      <SelectComponent
                        options={["Tourist", "Business visa", "Student visa"]}
                        placeholder={["Select room"]}
                      />
                    </div>
                    <div className="form-inner mb-20 col-lg-4">
                      <label>
                        Tour Type <span>*</span>
                      </label>
                      <SelectComponent
                        options={["Tourist", "Business visa", "Student visa"]}
                        placeholder={["Tour Type"]}
                      />
                    </div>
                    <div className="form-inner mb-20 col-lg-4">
                      <label>
                        Passenger First Name<span>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Passenger First Name"
                      />
                    </div>
                    <div className="form-inner mb-20 col-lg-4">
                      <label>
                        Passenger Last Name<span>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Passenger Last Name"
                      />
                    </div>
                    <div className="form-inner mb-20 col-lg-4">
                      <label>
                        Passport Expiry Date <span>*</span>
                      </label>
                      <input type="date" placeholder="Departure Date" />
                    </div>





                  </div>


                </form>
              </div>

              {
                pasArr.map((item, index) => {

                  return (
                    <>
                      <div className="inquery-form bg-light p-5 mt-40">
                        <div className="form-inner mb-20 col-lg-4">
                          <label>
                            Passenger Details<span></span>
                          </label>

                        </div>
                        <form

                        >
                          <div className="row">



                            <div className="form-inner mb-20 col-lg-4">
                              <label>
                                Type First Name <span>*</span>
                              </label>
                              <input type="date" placeholder="Type First Name" />
                            </div>
                            <div className="form-inner mb-20 col-lg-4">
                              <label>
                                Type Surname <span>*</span>
                              </label>
                              <input type="date" placeholder="Type Surname" />
                            </div>
                            <div className="form-inner mb-20 col-lg-4">
                              <label>
                                Return Date <span>*</span>
                              </label>
                              <input type="date" placeholder="Return Date" />
                            </div>

                          </div>


                        </form>
                      </div>
                    </>
                  );
                })
              }



              <div className="w-100 d-flex justify-content-end mt-40">
                <div className="form-inner">
                  <button type="submit" className="primary-btn1 two">
                    Save & Continue
                  </button>
                </div>
              </div>

            </div>
            <div className="col-xl-1">

            </div>
            <div className="col-xl-3">
              <div className="booking-form-wrap mb-40">
                <h4>Book Your Tour</h4>
                <p>
                  Reserve your ideal trip early for a hassle-free trip; secure
                  comfort and convenience!
                </p>
                {/* <div className="nav nav-pills mb-40" role="tablist">
                  <button
                    className="nav-link show active"
                    id="v-pills-booking-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-booking"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-booking"
                    aria-selected="true"
                  >
                    Online Booking
                  </button>
                  <button
                    className="nav-link"
                    id="v-pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-contact"
                    aria-selected="false"
                  >
                    Inquiry Form
                  </button>
                </div> */}
                <div className="tab-content" id="v-pills-tabContent2">
                  <div
                    className="tab-pane fade active show"
                    id="v-pills-booking"
                    role="tabpanel"
                    aria-labelledby="v-pills-booking-tab"
                  >
                    <div className="sidebar-booking-form">
                      <form>
                        <div className="tour-date-wrap mb-50">
                          <h6>Select Your Booking Date:</h6>
                          <div className="form-check mb-25">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="tourDate"
                              id="checkIn"
                              defaultValue="option1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkIn"
                            >
                              <span className="tour-date">
                                <span className="start-date">
                                  <span>Check In</span>
                                  <span> Jan 1, 2024 </span>
                                </span>
                                <i className="bi bi-arrow-right" />
                                <span className="end-date text-end">
                                  <span>Check Out</span>
                                  <span>Jan 5, 2024</span>
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check mb-25">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="tourDate"
                              id="checkOut"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkOut"
                            >
                              <span className="tour-date">
                                <span className="start-date">
                                  <span>Check In</span>
                                  <span> Jan 10, 2024 </span>
                                </span>
                                <i className="bi bi-arrow-right" />
                                <span className="end-date text-end">
                                  <span>Check Out</span>
                                  <span>Jan 15, 2024</span>
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="form-check customdate">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="tourDate"
                              id="Coustom"
                              defaultValue="option1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="Coustom"
                            ></label>
                            <span className="form-group">
                              <input
                                type="text"
                                readOnly
                                name="daterange"
                                placeholder="5 Jan, 2024"
                              />

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                              >
                                <path d="M10.3125 7.03125C10.3125 6.90693 10.3619 6.7877 10.4498 6.69979C10.5377 6.61189 10.6569 6.5625 10.7812 6.5625H11.7188C11.8431 6.5625 11.9623 6.61189 12.0502 6.69979C12.1381 6.7877 12.1875 6.90693 12.1875 7.03125V7.96875C12.1875 8.09307 12.1381 8.2123 12.0502 8.30021C11.9623 8.38811 11.8431 8.4375 11.7188 8.4375H10.7812C10.6569 8.4375 10.5377 8.38811 10.4498 8.30021C10.3619 8.2123 10.3125 8.09307 10.3125 7.96875V7.03125Z" />
                                <path d="M3.28125 0C3.40557 0 3.5248 0.049386 3.61271 0.137294C3.70061 0.225201 3.75 0.34443 3.75 0.46875V0.9375H11.25V0.46875C11.25 0.34443 11.2994 0.225201 11.3873 0.137294C11.4752 0.049386 11.5944 0 11.7188 0C11.8431 0 11.9623 0.049386 12.0502 0.137294C12.1381 0.225201 12.1875 0.34443 12.1875 0.46875V0.9375H13.125C13.6223 0.9375 14.0992 1.13504 14.4508 1.48667C14.8025 1.83831 15 2.31522 15 2.8125V13.125C15 13.6223 14.8025 14.0992 14.4508 14.4508C14.0992 14.8025 13.6223 15 13.125 15H1.875C1.37772 15 0.900806 14.8025 0.549175 14.4508C0.197544 14.0992 0 13.6223 0 13.125V2.8125C0 2.31522 0.197544 1.83831 0.549175 1.48667C0.900806 1.13504 1.37772 0.9375 1.875 0.9375H2.8125V0.46875C2.8125 0.34443 2.86189 0.225201 2.94979 0.137294C3.0377 0.049386 3.15693 0 3.28125 0V0ZM1.875 1.875C1.62636 1.875 1.3879 1.97377 1.21209 2.14959C1.03627 2.3254 0.9375 2.56386 0.9375 2.8125V13.125C0.9375 13.3736 1.03627 13.6121 1.21209 13.7879C1.3879 13.9637 1.62636 14.0625 1.875 14.0625H13.125C13.3736 14.0625 13.6121 13.9637 13.7879 13.7879C13.9637 13.6121 14.0625 13.3736 14.0625 13.125V2.8125C14.0625 2.56386 13.9637 2.3254 13.7879 2.14959C13.6121 1.97377 13.3736 1.875 13.125 1.875H1.875Z" />
                                <path d="M2.34375 3.75C2.34375 3.62568 2.39314 3.50645 2.48104 3.41854C2.56895 3.33064 2.68818 3.28125 2.8125 3.28125H12.1875C12.3118 3.28125 12.431 3.33064 12.519 3.41854C12.6069 3.50645 12.6562 3.62568 12.6562 3.75V4.6875C12.6562 4.81182 12.6069 4.93105 12.519 5.01896C12.431 5.10686 12.3118 5.15625 12.1875 5.15625H2.8125C2.68818 5.15625 2.56895 5.10686 2.48104 5.01896C2.39314 4.93105 2.34375 4.81182 2.34375 4.6875V3.75Z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="booking-form-item-type mb-45">
                          <div className="number-input-item adults">
                            <label className="number-input-lable">
                              Adult:<span></span>
                              <span>
                                {" "}
                                $60 <del>$80</del>
                              </span>
                            </label>
                            <QuantityCounter incIcon="bx bx-plus" dcrIcon="bx bx-minus" />
                          </div>
                          <div className="number-input-item children">
                            <label className="number-input-lable">
                              Children:<span></span>
                              <span>$15</span>
                            </label>
                            <QuantityCounter incIcon="bx bx-plus" dcrIcon="bx bx-minus" />
                          </div>
                        </div>
                        <div className="booking-form-item-type">
                          <h5>Other Extra Services</h5>
                          <div className="checkbox-container">
                            <label className="check-container">
                              Home Pickup
                              <input
                                type="checkbox"
                                className="services_check"
                                name="services_list[]"
                                defaultValue={0}
                              />
                              <span className="checkmark" />
                              <span className="price">$10 </span>
                            </label>
                            <label className="check-container">
                              Night Food
                              <input
                                type="checkbox"
                                className="services_check"
                                name="services_list[]"
                                defaultValue={1}
                              />
                              <span className="checkmark" />
                              <span className="price">$15 </span>
                            </label>
                            <label className="check-container">
                              Seaplane Fyling
                              <input
                                type="checkbox"
                                className="services_check"
                                name="services_list[]"
                                defaultValue={2}
                              />
                              <span className="checkmark" />
                              <span className="price">$20 </span>
                            </label>
                          </div>
                        </div>
                        <div className="booking-form-item-type">
                          <div className="single-total mb-30">
                            <span>Adult</span>
                            <ul>
                              <li>
                                <strong>$195</strong> PRICE
                              </li>
                              <li>
                                <i className="bi bi-x-lg" />
                              </li>
                              <li>
                                <strong>02</strong> QTY
                              </li>
                              <li>
                                <i className="bi bi-x-lg" />
                              </li>
                              <li>
                                <strong>04</strong> DAYS
                              </li>
                            </ul>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={15}
                              viewBox="0 0 27 15"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z"
                              />
                            </svg>
                            <div className="total">$390</div>
                          </div>
                          <div className="single-total mb-30">
                            <span>Children</span>
                            <ul>
                              <li>
                                <strong>$195</strong> PRICE
                              </li>
                              <li>
                                <i className="bi bi-x-lg" />
                              </li>
                              <li>
                                <strong>02</strong> QTY
                              </li>
                              <li>
                                <i className="bi bi-x-lg" />
                              </li>
                              <li>
                                <strong>04</strong> DAYS
                              </li>
                            </ul>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={27}
                              height={15}
                              viewBox="0 0 27 15"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.999 5.44668L25.6991 7.4978L23.9991 9.54878H0V10.5743H23.1491L20.0135 14.3575L20.7834 14.9956L26.7334 7.81687L26.9979 7.4978L26.7334 7.17873L20.7834 0L20.0135 0.638141L23.149 4.42114H0V5.44668H23.999Z"
                              />
                            </svg>
                            <div className="total">$390</div>
                          </div>
                        </div>
                        <div className="total-price">
                          <span>Total Price:</span> $470
                        </div>
                        <button type="submit" className="primary-btn1 two">
                          Book Now
                        </button>
                      </form>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-contact"
                    role="tabpanel"
                    aria-labelledby="v-pills-contact-tab"
                  >
                    <div className="sidebar-booking-form">
                      <form>
                        <div className="form-inner mb-20">
                          <label>
                            Full Name <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div className="form-inner mb-20">
                          <label>
                            Email Address <span>*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="Enter your email address"
                          />
                        </div>
                        <div className="form-inner mb-20">
                          <label>
                            Phone Number <span>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div className="form-inner mb-30">
                          <label>
                            Write Your Massage <span>*</span>
                          </label>
                          <textarea
                            placeholder="Write your quiry"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-inner">
                          <button type="submit" className="primary-btn1 two">
                            Submit Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="banner2-card">
                <img src="/assets/img/innerpage/support-img.jpg" alt="" />
                <div className="banner2-content-wrap">
                  <div className="banner2-content">
                    <div className="hotline-area">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={28}
                          height={28}
                          viewBox="0 0 28 28"
                        >
                          <path d="M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995ZM26.9601 23.3399L25.5384 25.7098C25.2242 26.2474 24.7142 26.6427 24.1152 26.8128C21.2447 27.6009 16.2298 26.9482 8.64053 19.3589C1.0513 11.7697 0.398595 6.75515 1.18669 3.88421C1.35709 3.28446 1.75283 2.77385 2.2911 2.45921L4.66096 1.03749C4.98811 0.840645 5.41221 0.93606 5.62354 1.25397L7.67659 4.3363L9.39976 6.92078C9.60612 7.23283 9.53831 7.65108 9.24392 7.88199L7.1223 9.53232C6.47665 10.026 6.29227 10.9193 6.68979 11.6283L6.85826 11.9344C7.45459 13.0281 8.19599 14.3887 10.9027 17.095C13.6095 19.8012 14.9696 20.5427 16.0628 21.139L16.3694 21.3079C17.0783 21.7053 17.9716 21.521 18.4653 20.8753L20.1157 18.7537C20.3466 18.4595 20.7647 18.3918 21.0769 18.5979L26.7437 22.3773C27.0618 22.5885 27.1572 23.0128 26.9601 23.3399ZM15.8658 4.66809C20.2446 4.67296 23.7931 8.22149 23.798 12.6003C23.798 12.858 24.0069 13.0669 24.2646 13.0669C24.5223 13.0669 24.7312 12.858 24.7312 12.6003C24.7257 7.7063 20.7598 3.74029 15.8658 3.73494C15.6081 3.73494 15.3992 3.94381 15.3992 4.20151C15.3992 4.45922 15.6081 4.66809 15.8658 4.66809Z" />
                          <path d="M15.865 7.46746C18.6983 7.4708 20.9943 9.76678 20.9976 12.6001C20.9976 12.7238 21.0468 12.8425 21.1343 12.93C21.2218 13.0175 21.3404 13.0666 21.4642 13.0666C21.5879 13.0666 21.7066 13.0175 21.7941 12.93C21.8816 12.8425 21.9308 12.7238 21.9308 12.6001C21.9269 9.2516 19.2134 6.53813 15.865 6.5343C15.6073 6.5343 15.3984 6.74318 15.3984 7.00088C15.3984 7.25859 15.6073 7.46746 15.865 7.46746Z" />
                          <path d="M15.865 10.267C17.1528 10.2686 18.1964 11.3122 18.198 12.6C18.198 12.7238 18.2472 12.8424 18.3347 12.9299C18.4222 13.0174 18.5409 13.0666 18.6646 13.0666C18.7883 13.0666 18.907 13.0174 18.9945 12.9299C19.082 12.8424 19.1312 12.7238 19.1312 12.6C19.1291 10.797 17.668 9.33589 15.865 9.33386C15.6073 9.33386 15.3984 9.54274 15.3984 9.80044C15.3984 10.0581 15.6073 10.267 15.865 10.267Z" />
                        </svg>
                      </div>
                      <div className="content">
                        <span>To More Inquiry</span>
                        <h6>
                          <a href="tel:+990737621432">+990-737 621 432</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <Lightbox
          className="img-fluid"
          open={isOpenimg.openingState}
          plugins={[Fullscreen]}
          index={isOpenimg.openingIndex}
          close={() => setOpenimg(false)}
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
          slides={images.map(function (elem) {
            return { src: elem.imageBig };
          })}
        />
        <React.Fragment>
          <ModalVideo
            channel="youtube"
            onClick={() => setOpen(true)}
            isOpen={isOpen}
            animationSpeed="350"
            videoId="r4KpWiK08vM"
            ratio="16:9"
            onClose={() => setOpen(false)}
          />
        </React.Fragment>
      </div>
      {/* <Newslatter /> */}
      <Footer />
    </>
  );
};

export default Page;
