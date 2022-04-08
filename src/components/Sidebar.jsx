import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLink from "./NavLink";
import userPic from "../assets/userPic.png";

export default function Sidebar({}) {
  const navigate = useNavigate();
  return (
    <div className="container__sidebar__wrapper">
      <div className="container__sidebar">
        <div className="container__sidebar__header">
          <img
            src={userPic}
            alt="userPic"
            className="container__sidebar__header__img"
          />
          <div className="container__sidebar__header__content">
            <div className="container__sidebar__header__content__name">
              Dayyan Shahid
            </div>
          </div>
        </div>
        <div className="container__sidebar__content">
          <NavLink
            to="/dashboard"
            title="Dashboard"
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.984"
                height="22.984"
                viewBox="0 0 22.984 22.984"
              >
                <path
                  id="Icon_material-dashboard"
                  data-name="Icon material-dashboard"
                  d="M4.5,16.714h9.771V4.5H4.5Zm0,9.771h9.771V19.156H4.5Zm12.214,0h9.771V14.271H16.714Zm0-21.984v7.328h9.771V4.5Z"
                  transform="translate(-4 -4)"
                  fill="none"
                  stroke="#fff"
                  stroke-width="1"
                />
              </svg>
            }
          />
          <NavLink
            to="/dashboard"
            title="Ads Management"
            svg={
              <svg
                id="Group_1148"
                data-name="Group 1148"
                xmlns="http://www.w3.org/2000/svg"
                width="20.166"
                height="25.508"
                viewBox="0 0 20.166 25.508"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_154"
                      data-name="Rectangle 154"
                      width="20.166"
                      height="25.508"
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_735"
                  data-name="Group 735"
                  clip-path="url(#clip-path)"
                >
                  <path
                    id="Path_811"
                    data-name="Path 811"
                    d="M4.426,21.695c0-.984.015-1.968-.013-2.951a.81.81,0,0,0-.279-.551,10.062,10.062,0,0,1,9.32-17.6,9.973,9.973,0,0,1,6.7,9.925,9.712,9.712,0,0,1-4.031,7.592.826.826,0,0,0-.382.745c.017,1.861.009,3.723.007,5.584,0,1.013-.427,1.3-1.339.89-1.3-.579-2.6-1.152-3.886-1.754a.952.952,0,0,0-.893.01c-1.3.6-2.617,1.185-3.93,1.768-.832.37-1.272.078-1.277-.843,0-.938,0-1.876,0-2.815m5.632-3.054A8.579,8.579,0,1,0,1.475,10.07a8.6,8.6,0,0,0,8.583,8.571m4.2,4.994v-4.4a10.185,10.185,0,0,1-8.327,0v4.37c.169-.067.307-.115.441-.175,1.036-.461,2.079-.907,3.1-1.4a1.326,1.326,0,0,1,1.247,0c1.146.541,2.31,1.043,3.538,1.591"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                  <path
                    id="Path_812"
                    data-name="Path 812"
                    d="M52.66,36.4a4.058,4.058,0,0,1,.689.609c.443.649.855,1.321,1.256,2a.664.664,0,0,0,.641.385c.786,0,1.572.047,2.359.077s1.1.553.73,1.264-.771,1.407-1.12,2.128a.794.794,0,0,0,0,.611c.35.721.75,1.417,1.12,2.128.361.693.07,1.21-.7,1.246s-1.572.073-2.359.078a.713.713,0,0,0-.682.407c-.391.665-.806,1.316-1.223,1.965a.772.772,0,0,1-1.435,0c-.417-.649-.836-1.3-1.221-1.966a.741.741,0,0,0-.727-.411c-.771,0-1.543-.04-2.313-.076s-1.068-.551-.709-1.243.711-1.37,1.095-2.039a.694.694,0,0,0,.009-.789c-.372-.641-.707-1.3-1.053-1.958-.433-.82-.143-1.323.772-1.351.786-.024,1.574-.04,2.358-.1a.739.739,0,0,0,.49-.29c.456-.677.859-1.39,1.32-2.064a3.941,3.941,0,0,1,.7-.613m-3.94,4.46c.349.655.6,1.171.893,1.659a1.115,1.115,0,0,1,.007,1.27c-.3.5-.551,1.023-.9,1.676.712,0,1.3.012,1.878,0a1.088,1.088,0,0,1,1.068.613c.291.519.628,1.012.983,1.576.379-.6.719-1.119,1.032-1.649a.99.99,0,0,1,.927-.535c.348,0,.7-.009,1.043-.023.275-.011.55-.035.892-.057-.305-.574-.543-1.08-.836-1.553a1.164,1.164,0,0,1,0-1.35c.3-.482.537-1,.868-1.627-.675,0-1.232-.023-1.785.006a1.217,1.217,0,0,1-1.235-.731c-.261-.484-.578-.937-.906-1.459-.33.523-.645.95-.884,1.417a1.29,1.29,0,0,1-1.348.777c-.524-.029-1.051-.006-1.7-.006"
                    transform="translate(-42.565 -33.099)"
                    fill="#fff"
                  />
                </g>
              </svg>
            }
            list={[
              {
                to: "/dashboard/ads_management/headlines",
                title: "Headlines",
                svg: (
                  <svg
                    id="Group_1148"
                    data-name="Group 1148"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.166"
                    height="25.508"
                    viewBox="0 0 20.166 25.508"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_154"
                          data-name="Rectangle 154"
                          width="20.166"
                          height="25.508"
                          fill="#fff"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_735"
                      data-name="Group 735"
                      clip-path="url(#clip-path)"
                    >
                      <path
                        id="Path_811"
                        data-name="Path 811"
                        d="M4.426,21.695c0-.984.015-1.968-.013-2.951a.81.81,0,0,0-.279-.551,10.062,10.062,0,0,1,9.32-17.6,9.973,9.973,0,0,1,6.7,9.925,9.712,9.712,0,0,1-4.031,7.592.826.826,0,0,0-.382.745c.017,1.861.009,3.723.007,5.584,0,1.013-.427,1.3-1.339.89-1.3-.579-2.6-1.152-3.886-1.754a.952.952,0,0,0-.893.01c-1.3.6-2.617,1.185-3.93,1.768-.832.37-1.272.078-1.277-.843,0-.938,0-1.876,0-2.815m5.632-3.054A8.579,8.579,0,1,0,1.475,10.07a8.6,8.6,0,0,0,8.583,8.571m4.2,4.994v-4.4a10.185,10.185,0,0,1-8.327,0v4.37c.169-.067.307-.115.441-.175,1.036-.461,2.079-.907,3.1-1.4a1.326,1.326,0,0,1,1.247,0c1.146.541,2.31,1.043,3.538,1.591"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                      <path
                        id="Path_812"
                        data-name="Path 812"
                        d="M52.66,36.4a4.058,4.058,0,0,1,.689.609c.443.649.855,1.321,1.256,2a.664.664,0,0,0,.641.385c.786,0,1.572.047,2.359.077s1.1.553.73,1.264-.771,1.407-1.12,2.128a.794.794,0,0,0,0,.611c.35.721.75,1.417,1.12,2.128.361.693.07,1.21-.7,1.246s-1.572.073-2.359.078a.713.713,0,0,0-.682.407c-.391.665-.806,1.316-1.223,1.965a.772.772,0,0,1-1.435,0c-.417-.649-.836-1.3-1.221-1.966a.741.741,0,0,0-.727-.411c-.771,0-1.543-.04-2.313-.076s-1.068-.551-.709-1.243.711-1.37,1.095-2.039a.694.694,0,0,0,.009-.789c-.372-.641-.707-1.3-1.053-1.958-.433-.82-.143-1.323.772-1.351.786-.024,1.574-.04,2.358-.1a.739.739,0,0,0,.49-.29c.456-.677.859-1.39,1.32-2.064a3.941,3.941,0,0,1,.7-.613m-3.94,4.46c.349.655.6,1.171.893,1.659a1.115,1.115,0,0,1,.007,1.27c-.3.5-.551,1.023-.9,1.676.712,0,1.3.012,1.878,0a1.088,1.088,0,0,1,1.068.613c.291.519.628,1.012.983,1.576.379-.6.719-1.119,1.032-1.649a.99.99,0,0,1,.927-.535c.348,0,.7-.009,1.043-.023.275-.011.55-.035.892-.057-.305-.574-.543-1.08-.836-1.553a1.164,1.164,0,0,1,0-1.35c.3-.482.537-1,.868-1.627-.675,0-1.232-.023-1.785.006a1.217,1.217,0,0,1-1.235-.731c-.261-.484-.578-.937-.906-1.459-.33.523-.645.95-.884,1.417a1.29,1.29,0,0,1-1.348.777c-.524-.029-1.051-.006-1.7-.006"
                        transform="translate(-42.565 -33.099)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                ),
              },
              {
                to: "/dashboard/ads_management/banners",
                title: "Banners",
                svg: (
                  <svg
                    id="Group_1148"
                    data-name="Group 1148"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.166"
                    height="25.508"
                    viewBox="0 0 20.166 25.508"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_154"
                          data-name="Rectangle 154"
                          width="20.166"
                          height="25.508"
                          fill="#fff"
                        />
                      </clipPath>
                    </defs>
                    <g
                      id="Group_735"
                      data-name="Group 735"
                      clip-path="url(#clip-path)"
                    >
                      <path
                        id="Path_811"
                        data-name="Path 811"
                        d="M4.426,21.695c0-.984.015-1.968-.013-2.951a.81.81,0,0,0-.279-.551,10.062,10.062,0,0,1,9.32-17.6,9.973,9.973,0,0,1,6.7,9.925,9.712,9.712,0,0,1-4.031,7.592.826.826,0,0,0-.382.745c.017,1.861.009,3.723.007,5.584,0,1.013-.427,1.3-1.339.89-1.3-.579-2.6-1.152-3.886-1.754a.952.952,0,0,0-.893.01c-1.3.6-2.617,1.185-3.93,1.768-.832.37-1.272.078-1.277-.843,0-.938,0-1.876,0-2.815m5.632-3.054A8.579,8.579,0,1,0,1.475,10.07a8.6,8.6,0,0,0,8.583,8.571m4.2,4.994v-4.4a10.185,10.185,0,0,1-8.327,0v4.37c.169-.067.307-.115.441-.175,1.036-.461,2.079-.907,3.1-1.4a1.326,1.326,0,0,1,1.247,0c1.146.541,2.31,1.043,3.538,1.591"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                      <path
                        id="Path_812"
                        data-name="Path 812"
                        d="M52.66,36.4a4.058,4.058,0,0,1,.689.609c.443.649.855,1.321,1.256,2a.664.664,0,0,0,.641.385c.786,0,1.572.047,2.359.077s1.1.553.73,1.264-.771,1.407-1.12,2.128a.794.794,0,0,0,0,.611c.35.721.75,1.417,1.12,2.128.361.693.07,1.21-.7,1.246s-1.572.073-2.359.078a.713.713,0,0,0-.682.407c-.391.665-.806,1.316-1.223,1.965a.772.772,0,0,1-1.435,0c-.417-.649-.836-1.3-1.221-1.966a.741.741,0,0,0-.727-.411c-.771,0-1.543-.04-2.313-.076s-1.068-.551-.709-1.243.711-1.37,1.095-2.039a.694.694,0,0,0,.009-.789c-.372-.641-.707-1.3-1.053-1.958-.433-.82-.143-1.323.772-1.351.786-.024,1.574-.04,2.358-.1a.739.739,0,0,0,.49-.29c.456-.677.859-1.39,1.32-2.064a3.941,3.941,0,0,1,.7-.613m-3.94,4.46c.349.655.6,1.171.893,1.659a1.115,1.115,0,0,1,.007,1.27c-.3.5-.551,1.023-.9,1.676.712,0,1.3.012,1.878,0a1.088,1.088,0,0,1,1.068.613c.291.519.628,1.012.983,1.576.379-.6.719-1.119,1.032-1.649a.99.99,0,0,1,.927-.535c.348,0,.7-.009,1.043-.023.275-.011.55-.035.892-.057-.305-.574-.543-1.08-.836-1.553a1.164,1.164,0,0,1,0-1.35c.3-.482.537-1,.868-1.627-.675,0-1.232-.023-1.785.006a1.217,1.217,0,0,1-1.235-.731c-.261-.484-.578-.937-.906-1.459-.33.523-.645.95-.884,1.417a1.29,1.29,0,0,1-1.348.777c-.524-.029-1.051-.006-1.7-.006"
                        transform="translate(-42.565 -33.099)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                ),
              },
            ]}
          />
          <NavLink
            to="/dashboard/partners"
            title="Partners"
            svg={
              <svg
                id="Group_1147"
                data-name="Group 1147"
                xmlns="http://www.w3.org/2000/svg"
                width="21.723"
                height="21.652"
                viewBox="0 0 21.723 21.652"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_153"
                      data-name="Rectangle 153"
                      width="21.723"
                      height="21.652"
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Group_733"
                  data-name="Group 733"
                  clip-path="url(#clip-path)"
                >
                  <path
                    id="Path_806"
                    data-name="Path 806"
                    d="M21.718,13.29a2.309,2.309,0,0,0-2.446-2.462c-1.115-.007-2.231-.015-3.346.006-.325.006-.416-.072-.414-.408.016-2.642.01-5.284.008-7.925a2.323,2.323,0,0,0-2.5-2.5Q7.754,0,2.493,0A2.31,2.31,0,0,0,0,2.506q0,3.809,0,7.617C0,12.662,0,15.2,0,17.74a3.823,3.823,0,0,0,3.9,3.9q6.956.016,13.913,0a3.825,3.825,0,0,0,3.9-3.907c.008-1.482.005-2.965,0-4.447M3.768,20.1A2.3,2.3,0,0,1,1.542,17.72c-.008-2.98,0-5.959,0-8.939q0-3.126,0-6.253c0-.709.277-.987.984-.988q5.24,0,10.479,0c.686,0,.954.271.954.963,0,4.8.008,9.6,0,14.4a4.757,4.757,0,0,0,.806,3.2c-3.741,0-7.366.016-10.99-.009m16.409-2.316a2.327,2.327,0,1,1-4.654-.039c-.006-.807,0-1.614,0-2.421,0-.88.009-1.761-.006-2.641,0-.249.068-.319.317-.317,1.159.013,2.318,0,3.477.008a.789.789,0,0,1,.87.876c.006,1.511.015,3.022,0,4.533"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                  <path
                    id="Path_807"
                    data-name="Path 807"
                    d="M39.874,133.081c-1.233,0-2.465,0-3.7,0-.6,0-.957-.3-.947-.8.01-.471.359-.762.938-.762q3.72,0,7.44,0a.829.829,0,0,1,.935.776.82.82,0,0,1-.925.782c-1.247,0-2.495,0-3.742,0"
                    transform="translate(-32.124 -119.931)"
                    fill="#fff"
                  />
                  <path
                    id="Path_808"
                    data-name="Path 808"
                    d="M39.859,96.447q1.849,0,3.7,0c.6,0,.976.3.985.767s-.379.792-.963.792q-3.7,0-7.4,0c-.6,0-.961-.3-.953-.792s.357-.765.975-.766q1.827,0,3.654,0"
                    transform="translate(-32.125 -87.948)"
                    fill="#fff"
                  />
                  <path
                    id="Path_809"
                    data-name="Path 809"
                    d="M81.955,168.18c-.616,0-1.231.005-1.847,0a.778.778,0,1,1-.026-1.547q1.869-.014,3.737,0a.779.779,0,1,1-.017,1.548c-.616.006-1.231,0-1.847,0"
                    transform="translate(-72.256 -151.941)"
                    fill="#fff"
                  />
                  <path
                    id="Path_810"
                    data-name="Path 810"
                    d="M37.575,35.143c.5,0,.995-.007,1.492,0a.764.764,0,1,1,.012,1.525q-1.514.013-3.028,0a.764.764,0,1,1-.012-1.525c.512-.01,1.024,0,1.536,0"
                    transform="translate(-32.131 -32.043)"
                    fill="#fff"
                  />
                </g>
              </svg>
            }
          />
          <NavLink
            to="/dashboard/customers"
            title="Customers"
            svg={
              <svg
                id="Group_1146"
                data-name="Group 1146"
                xmlns="http://www.w3.org/2000/svg"
                width="23.175"
                height="23.092"
                viewBox="0 0 23.175 23.092"
              >
                <path
                  id="Path_800"
                  data-name="Path 800"
                  d="M13.2.451c.5.12,1.178.279,1.854.445,1.593.392,3.184.793,4.781,1.17a.576.576,0,0,0,.444-.146C20.832,1.394,21.365.842,21.911.3c.377-.371.783-.4,1.078-.093s.245.682-.115,1.047c-.539.545-1.079,1.089-1.631,1.62a.472.472,0,0,0-.137.537q.8,3.12,1.554,6.25a2.065,2.065,0,0,1-.681,2.039q-3.482,3.457-6.95,6.929-1.875,1.87-3.751,3.74a2.037,2.037,0,0,1-3.114-.007Q4.452,18.673.748,14.974a2.024,2.024,0,0,1-.006-3.136Q6.122,6.476,11.508,1.119A2.285,2.285,0,0,1,13.2.451m5.719,2.827a2.138,2.138,0,0,0-.238-.1c-1.819-.449-3.635-.911-5.463-1.325a.977.977,0,0,0-.757.256Q7.05,7.45,1.677,12.821a.7.7,0,0,0,.005,1.166Q5.4,17.7,9.129,21.408a.718.718,0,0,0,1.2,0q5.366-5.349,10.729-10.7a.842.842,0,0,0,.251-.888c-.339-1.311-.654-2.628-.98-3.942-.13-.526-.263-1.052-.427-1.7-.474.493-.853.921-1.27,1.306a.67.67,0,0,0-.217.779,1.986,1.986,0,0,1-1.484,2.418A2.03,2.03,0,1,1,17,4.75a.605.605,0,0,0,.472-.041c.484-.442.935-.919,1.446-1.431M17.108,6.725a.651.651,0,0,0-.659-.681.658.658,0,0,0-.672.63.672.672,0,0,0,.641.707.664.664,0,0,0,.69-.656"
                  transform="translate(0 0)"
                  fill="#fff"
                />
                <path
                  id="Path_803"
                  data-name="Path 803"
                  d="M64.321,145.738c-.556.019-.859-.216-.884-.62a.688.688,0,0,1,.689-.714q4.217-.468,8.434-.931a.683.683,0,1,1,.157,1.34q-3.789.424-7.579.836l-.817.089"
                  transform="translate(-58.225 -131.68)"
                  fill="#fff"
                />
                <path
                  id="Path_804"
                  data-name="Path 804"
                  d="M109.36,175.368a2.036,2.036,0,1,1-2.055-2.022,2.047,2.047,0,0,1,2.055,2.022m-1.369-.009a.665.665,0,1,0-1.329.055.665.665,0,0,0,1.329-.055"
                  transform="translate(-96.64 -159.107)"
                  fill="#fff"
                />
                <path
                  id="Path_805"
                  data-name="Path 805"
                  d="M93.743,93.969a2.029,2.029,0,0,1,4.059-.025,2.029,2.029,0,1,1-4.059.025m2.7.009a.665.665,0,0,0-.676-.671.658.658,0,0,0-.669.634.677.677,0,0,0,.652.7.684.684,0,0,0,.694-.662"
                  transform="translate(-86.043 -84.391)"
                  fill="#fff"
                />
              </svg>
            }
          />
        </div>
        <div className="container__sidebar__footer">
          <button
            className="container__sidebar__footer__entry"
            onClick={() => {
              navigate("/");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.652"
              height="16.154"
              viewBox="0 0 18.652 16.154"
            >
              <path
                id="Icon_open-account-logout"
                data-name="Icon open-account-logout"
                d="M6.494,0V2.165h8.659V12.989H6.494v2.165H17.318V0ZM4.33,4.33,0,7.577l4.33,3.247V8.659h8.659V6.494H4.33Z"
                transform="translate(0.833 0.5)"
                fill="#fff"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
