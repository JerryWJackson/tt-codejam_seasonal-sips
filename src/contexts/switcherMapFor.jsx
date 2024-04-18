const [isLocated, setIsLocated] = useState(false);
const [address, setAddress] = useState("");
const [pin, setPin] = useState("");
const [notFound, setNotFound] = useState(false);

const handleScroll = (elementId) => {
  setIsLocated(true);
  setTimeout(() => {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      const { top } = targetElement.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + top,
        behavior: "smooth",
      });
    }
  }, 100);
};





const setLocation = () => {
  const input = document.querySelector("#search-bar");
  if (input.value.length > 0) {
    props.setIsLocated(true);
    props.handleScroll("main");
    props.setAddress(input.value);
  }
};

const handleEnter = (e) => {
  if (e.key === "Enter") {
    setLocation();
  }
};

<input
id="search-bar"
type="text"
placeholder="Enter Zipcode"
className="home__search"
onKeyDown={handleEnter}
required
/>
