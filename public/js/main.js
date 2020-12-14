const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const submitBtns = document.getElementById("submitBtns");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");
const getInfo = async(e) => {
    e.preventDefault();

    let cityVal = cityName.value;

    if (cityVal === '') {
        city_name.innerHTML = `Please write the name before search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7c557666ff54bd0153411be9dbe9111a`;
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            city_name.innerHTML = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp.innerHTML = `${arrdata[0].main.temp}&deg; C`;
            const temp_s = arrdata[0].weather[0].main;
            if (temp_s == "Clouds") {
                temp_status.innerHTML = `<i class="fa fa-cloud " style=" color: aqua;"></i>`;
            } else if (temp_s == "Rain") {
                temp_status.innerHTML = `<i class="fa fa-cloud-rain"  style=" color: aqua;"></i>`;
            } else {
                temp_status.innerHTML = `<i class="fa fa-cloud"  style=" color: aqua;"></i>`;
            }
            datahide.classList.remove('data_hide');

        } catch (error) {
            city_name.innerHTML = `Please enter the name properly`;
            datahide.classList.add('data_hide');
        }

    }
}
submitBtns.addEventListener('click', getInfo);