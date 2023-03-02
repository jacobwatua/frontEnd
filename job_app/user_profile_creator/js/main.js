function adjust_form_size (form_id){
    var output_style = "";
    let item = document.getElementById("user-profile");
    let steps = document.getElementsByClassName("step");
    switch (form_id){
        case "1" :
            {
                output_style = "minmax(70vh, auto) repeat(4, 70px)";
                steps[0].style.alignItems = "flex-start";
            }
            break;
        case "2":
            {
                output_style = "70px minmax(70vh, auto) repeat(3, 70px)";
                steps[1].style.alignItems = "flex-start";
                window.scrollTo(0, 150);
            }
            break;
        case "3" :
            {
                output_style = "repeat(2, 70px) auto repeat(2, 70px)";
                steps[2].style.alignItems = "flex-start";
                window.scrollTo(0, 40);
            }
            break;
        case "4":
            {
                output_style = "repeat(3, 70px) 70vh 70px";
                steps[3].style.alignItems = "flex-start";
            }
            break;
        default:
            {
                output_style = "repeat(4, 70px) auto";
                steps[4].style.alignItems = "flex-start";
            }
    }
    item.style.gridTemplateRows = output_style;
    document.getElementsByClassName("step")
}



var titles = ["Mr", "Mrs", "Miss", "Madam", "Dr", "Sir"];
var education_levels = ["High School", "Diploma", "College" , "Certificate", "Bachelors", "Masters", "PhD"];

function print_select_options(categories){
    for (var i = 0 ; i < categories.length; i++){
        document.write(`<option value=${i+1}>${categories[i]}</option>`);
    }
}

function expand_less (){
    let item = document.getEle;
    item.style = null;
}


//variables
const employableFieldsOfStudy = [
    "Accounting",
    "Actuarial Science",
    "Advertising",
    "Agricultural Business",
    "Agricultural Science",
    "Agriculture",
    "Animal Science",
    "Anthropology",
    "Applied Mathematics",
    "Architecture",
    "Artificial Intelligence",
    "Biochemistry",
    "Bioinformatics",
    "Biology",
    "Biomedical Engineering",
    "Biostatistics",
    "Business Administration",
    "Chemical Engineering",
    "Chemistry",
    "Civil Engineering",
    "Communications",
    "Computer Engineering",
    "Computer Science",
    "Construction Management",
    "Criminal Justice",
    "Cybersecurity",
    "Data Science",
    "Dental Hygiene",
    "Dentistry",
    "Economics",
    "Education",
    "Electrical Engineering",
    "Electronic Engineering",
    "Engineering",
    "English",
    "Environmental Engineering",
    "Environmental Science",
    "Fashion Design",
    "Finance",
    "Food Science",
    "Geography",
    "Geology",
    "Graphic Design",
    "Healthcare Administration",
    "History",
    "Hospitality Management",
    "Human Resources",
    "Industrial Design",
    "Information Science",
    "Information Systems",
    "Interior Design",
    "International Business",
    "International Relations",
    "Journalism",
    "Landscape Architecture",
    "Law",
    "Library Science",
    "Linguistics",
    "Management",
    "Marketing",
    "Materials Science",
    "Mathematics",
    "Mechanical Engineering",
    "Medical Laboratory Science",
    "Medicine",
    "Meteorology",
    "Microbiology",
    "Music",
    "Nursing",
    "Nutrition",
    "Occupational Therapy",
    "Operations Management",
    "Optometry",
    "Organizational Psychology",
    "Pharmacy",
    "Philosophy",
    "Physical Therapy",
    "Physics",
    "Political Science",
    "Psychology",
    "Public Health",
    "Public Relations",
    "Radiology",
    "Real Estate",
    "Social Work",
    "Sociology",
    "Software Engineering",
    "Speech Therapy",
    "Sports Management",
    "Statistics",
    "Supply Chain Management",
    "Sustainability",
    "Teaching",
    "Technical Writing",
    "Theater",
    "Transportation Engineering",
    "Urban Planning",
    "User Experience Design",
    "Veterinary Science",
    "Web Development"
  ];

  //various departments

  const jobDepartments = [
    "Accounting",
    "Advertising",
    "Architecture",
    "Banking",
    "Business Development",
    "Customer Service",
    "Data Analysis",
    "Design",
    "Education",
    "Engineering",
    "Environmental Services",
    "Finance",
    "Food Services",
    "Government",
    "Healthcare",
    "Human Resources",
    "Information Technology",
    "Insurance",
    "Legal",
    "Logistics",
    "Maintenance",
    "Manufacturing",
    "Marketing",
    "Media",
    "Medical",
    "Non-profit",
    "Operations",
    "Pharmaceutical",
    "Product Management",
    "Public Relations",
    "Real Estate",
    "Research",
    "Retail",
    "Sales",
    "Science",
    "Security",
    "Social Media",
    "Software Development",
    "Sports",
    "Supply Chain",
    "Telecommunications",
    "Training",
    "Transportation",
    "Travel",
    "Utilities",
    "Video Production",
    "Web Development",
    "Writing"
  ];
  
  

//end of variables declaration
