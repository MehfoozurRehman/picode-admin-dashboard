import React from "react";
import { ArrowLeft } from "react-feather";
import Select from "react-select";
import UploadImage from "../components/UploadImage";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";

export default function HeadlinesForm({ heading }) {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__header" style={{ height: "8%" }}>
        <div className="main__header__top">
          <div className="main__header__top__heading">{heading} Headline</div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                navigate(-1);
              }}
            >
              {heading === "Add" ? "Add New" : "Save"}
            </button>
          </div>
        </div>
      </div>
      <div
        className="main__content"
        style={{
          height: "92%",
        }}
      >
        <div className="main__content__form">
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Title</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Title"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Duration</div>
              <input
                type="time"
                className="popup__form__input__field"
                placeholder="Enter Duration"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Is Featured</div>
              <Select
                options={[
                  { value: true, label: "Yes" },
                  { value: false, label: "No" },
                ]}
                theme={(theme) => ({
                  ...theme,

                  colors: {
                    ...theme.colors,
                    primary25: "#f6f6f6",
                    primary: "#9a7cb8",
                    primary50: "f6f6f6",
                  },
                })}
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Price</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Price"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col"></div>
          <div className="main__content__form__col"></div>
          <div className="main__content__form__col">
            <UploadImage label="Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
