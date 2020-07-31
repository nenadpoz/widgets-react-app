import React, { useEffect, useState } from "react";

import axios from "axios";

const Convert = ({ language, text }) => {
  const [translatedText, settranslatedText] = useState("");
  const [debauncedText, setDebauncedText] = useState(text);
  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebauncedText(text);
    }, 1500);
    return () => {
      clearTimeout(timeId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debauncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
          }
        }
      );
      settranslatedText(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debauncedText]);
  return <h1 className="ui header">Translation: {translatedText}</h1>;
};

export default Convert;
