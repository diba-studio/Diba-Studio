// varibales
// first form inputs
const nameIn = document.getElementById("nameInput")
const phoneIn = document.getElementById("phoneInput")
const emailIn = document.getElementById("emailInpute")
const maleGenderIn = document.getElementById("maleGender")
const femaleGenderIn = document.getElementById("femaleGender")
const otherGenderIn = document.getElementById("otherGender")

function validateEmail() {

    const mailValid = emailIn.value;
    let atposition = mailValid.indexOf("@");
    let dotposition = mailValid.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= mailValid.length) {
        return false;
    } else {
        return true;
    }
}


function form1_Validate() {
    let form1_isValid = false
    const name = nameIn.value
    const phone = phoneIn.value
    const email = emailIn.value
    const male = maleGenderIn
    const female = femaleGenderIn
    const otherGender = otherGenderIn
    if (name != "" && phone != "" && email != "") {
        if (validateEmail()) {
            if (male.checked == true || female.checked == true || otherGender.checked == true) {
                form1_isValid = true

            } else {
                form1_isValid = false
                alert("جنسیت خود را وارد کنید")

            }
        } else {
            alert("ایمیل اشتباه است")
        }
    } else {
        form1_isValid = false
        alert("تمامی فیلد ها ضروری است")

    }
    if (form1_isValid == true) {
        form1.hidden = true;
        form2.hidden = false;
        classManagerRemoveActive(tab1, tab3, a1, a3)
        classManagerAddActive(tab2, a2)
        tab2.addEventListener("click", () => {
            classManagerRemoveActive(tab1, tab3, a1, a3)
            classManagerAddActive(tab2, a2)
            formManager(form1, form3, form2)

        })
        tab1.addEventListener("click", () => {
            classManagerRemoveActive(tab2, tab3, a2, a3)
            classManagerAddActive(tab1, a1)
            formManager(form2, form3, form1)

        })



    }
}
// second form inputs
const birthDayIn = document.getElementById("birthDayInput")
const birthMonthIn = document.getElementById("birthMonthInput")
const birthYearIn = document.getElementById("birthYear")
const addressIn = document.getElementById("address")
const marriedIn = document.getElementById("married")
const singleIn = document.getElementById("single")
const educationPardonIn = document.getElementById("educationPardon")
const conscriptionExemptIn = document.getElementById("conscriptionExempt")
const retiredIn = document.getElementById("retired")
const activeMilitaryIn = document.getElementById("activeMilitary")



function form2_Validate() {
    let form2_isValid = false
    const birthDay = birthDayIn.value
    const birthMonth = birthMonthIn.value
    const birthYear = birthYearIn.value
    const address = addressIn.value
    const married = marriedIn
    const single = singleIn
    const educationPardon = educationPardonIn
    const conscriptionExempt = conscriptionExemptIn
    const retired = retiredIn
    const activeMilitary = activeMilitaryIn
    const acceptableYear = getPersianDate("y") - 10
    if (birthDay != 0 && birthMonth != 0) {
        if (birthYear <= acceptableYear) {
            if (address != "") {
                if (married.checked == true || single.checked == true) {
                    if (educationPardon.checked == true || conscriptionExempt.checked == true || retired.checked == true || activeMilitary.checked == true) {
                        form2_isValid = true
                    } else {
                        alert("وضعیت خدمت سربازی را وارد کنید")
                    }




                } else {
                    alert("وضعیت تاهل را وارد کنید")
                }






            } else {
                alert("تمامی فیلد ها اجباری است.")
            }
        } else {
            alert("سن شما از حد مجاز کمتر است")
        }


    } else {
        alert("تمامی فیلد ها اجباری است.")
        form2_isValid = true
    }


    if (form2_isValid == true) {
        form2.hidden = true;
        form3.hidden = false;
        classManagerRemoveActive(tab2, tab3, a2, a3)
        classManagerAddActive(tab3, a3)
        tab3.addEventListener("click", () => {
            classManagerRemoveActive(tab1, tab2, a1, a2)
            classManagerAddActive(tab3, a3)
            formManager(form1, form2, form3)
        })
    }

}
// form 3 inputs
const frontend = document.querySelector("#frontend")
const backend = document.querySelector("#backend")
const wordpress = document.querySelector("#wordpress")
const workExperiance1 = document.querySelector("#workExperiance1")
const workExperiance2 = document.querySelector("#workExperiance2")
const requestedIncome = document.querySelector("#requestedIncome")

function form3_Validate() {
    let form3_isValid = false
    Income = requestedIncome.value
    if (frontend.checked == true || backend.checked == true || wordpress.checked == true) {
        if (workExperiance1.checked == true || workExperiance2.checked == true) {
            if (Income != "") {
                form3_isValid = true
            } else {
                alert("مبلغ درخواستی را وارد کنید")
            }


        } else {
            alert("فیلد سابقه کاری را پر کنید")
        }
    } else {
        alert("حوضه تخصص خود را وارد کنید")
    }
    if (form3_isValid == true) {
        console.log("send Email")
    }

}









// get year
getPersianDate = (format) => {
    let week = new Array("يكشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه")
    let months = new Array("فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دي", "بهمن", "اسفند");
    let today = new Date();
    let d = today.getDay();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getYear();
    year = (window.navigator.userAgent.indexOf('MSIE') > 0) ? year : 1900 + year;
    if (year == 0) {
        year = 2000;
    }
    if (year < 100) {
        year += 1900;
    }
    y = 1;
    for (i = 0; i < 3000; i += 4) {
        if (year == i) {
            y = 2;
        }
    }
    for (i = 1; i < 3000; i += 4) {
        if (year == i) {
            y = 3;
        }
    }
    if (y == 1) {
        year -= ((month < 3) || ((month == 3) && (day < 21))) ? 622 : 621;
        switch (month) {
            case 1:
                (day < 21) ? (month = 10, day += 10) : (month = 11, day -= 20);
                break;
            case 2:
                (day < 20) ? (month = 11, day += 11) : (month = 12, day -= 19);
                break;
            case 3:
                (day < 21) ? (month = 12, day += 9) : (month = 1, day -= 20);
                break;
            case 4:
                (day < 21) ? (month = 1, day += 11) : (month = 2, day -= 20);
                break;
            case 5:
            case 6:
                (day < 22) ? (month -= 3, day += 10) : (month -= 2, day -= 21);
                break;
            case 7:
            case 8:
            case 9:
                (day < 23) ? (month -= 3, day += 9) : (month -= 2, day -= 22);
                break;
            case 10:
                (day < 23) ? (month = 7, day += 8) : (month = 8, day -= 22);
                break;
            case 11:
            case 12:
                (day < 22) ? (month -= 3, day += 9) : (month -= 2, day -= 21);
                break;
            default:
                break;
        }
    }
    if (y == 2) {
        year -= ((month < 3) || ((month == 3) && (day < 20))) ? 622 : 621;
        switch (month) {
            case 1:
                (day < 21) ? (month = 10, day += 10) : (month = 11, day -= 20);
                break;
            case 2:
                (day < 20) ? (month = 11, day += 11) : (month = 12, day -= 19);
                break;
            case 3:
                (day < 20) ? (month = 12, day += 10) : (month = 1, day -= 19);
                break;
            case 4:
                (day < 20) ? (month = 1, day += 12) : (month = 2, day -= 19);
                break;
            case 5:
                (day < 21) ? (month = 2, day += 11) : (month = 3, day -= 20);
                break;
            case 6:
                (day < 21) ? (month = 3, day += 11) : (month = 4, day -= 20);
                break;
            case 7:
                (day < 22) ? (month = 4, day += 10) : (month = 5, day -= 21);
                break;
            case 8:
                (day < 22) ? (month = 5, day += 10) : (month = 6, day -= 21);
                break;
            case 9:
                (day < 22) ? (month = 6, day += 10) : (month = 7, day -= 21);
                break;
            case 10:
                (day < 22) ? (month = 7, day += 9) : (month = 8, day -= 21);
                break;
            case 11:
                (day < 21) ? (month = 8, day += 10) : (month = 9, day -= 20);
                break;
            case 12:
                (day < 21) ? (month = 9, day += 10) : (month = 10, day -= 20);
                break;
            default:
                break;
        }
    }
    if (y == 3) {
        year -= ((month < 3) || ((month == 3) && (day < 21))) ? 622 : 621;
        switch (month) {
            case 1:
                (day < 20) ? (month = 10, day += 11) : (month = 11, day -= 19);
                break;
            case 2:
                (day < 19) ? (month = 11, day += 12) : (month = 12, day -= 18);
                break;
            case 3:
                (day < 21) ? (month = 12, day += 10) : (month = 1, day -= 20);
                break;
            case 4:
                (day < 21) ? (month = 1, day += 11) : (month = 2, day -= 20);
                break;
            case 5:
            case 6:
                (day < 22) ? (month -= 3, day += 10) : (month -= 2, day -= 21);
                break;
            case 7:
            case 8:
            case 9:
                (day < 23) ? (month -= 3, day += 9) : (month -= 2, day -= 22);
                break;
            case 10:
                (day < 23) ? (month = 7, day += 8) : (month = 8, day -= 22);
                break;
            case 11:
            case 12:
                (day < 22) ? (month -= 3, day += 9) : (month -= 2, day -= 21);
                break;
            default:
                break;
        }
    }
    if (format === null || format === undefined)
        return `${week[d]} ${day} ${months[month - 1]} ${year}`
    if (format === "y/m/d")
        return `${year}/${month}/${day}`;
    if (format === "d/m/y")
        return `${day}/${month}/${year}`;
    if (format === "y")
        return `${year}`;
}