import axios from "axios";

const consultaCEP = async (cepMasked: string) => {
  var cep = cepMasked
    .replace(".", "")
    .replace("-", "")
    .replace(/(\d{8})\d+?$/, "$1");
    
  return await axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res) => res.data)
    .catch((err) => err.response);
};

export default consultaCEP;
