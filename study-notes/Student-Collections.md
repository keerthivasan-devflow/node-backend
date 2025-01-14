#### Essential Fields:
_id (default MongoDB field) - Unique identifier for the student document.
first_name (string) - The student's first name.
last_name (string) - The student's last name.
full_name (string) - Optional, can be derived from first_name and last_name but might be stored separately for efficiency.
date_of_birth (Date) - The student’s date of birth.
gender (string) - The student's gender (e.g., "male", "female", "other").
student_id (string) - Unique identifier assigned by the educational institution (e.g., roll number, registration number).
email (string) - The student’s email address.
phone_number (string) - The student's contact number.
address (object) - The student's address (could include street, city, state, zip code).
enrollment_date (Date) - Date the student was enrolled.
status (string) - The enrollment status (e.g., "active", "graduated", "suspended").
course_enrolled (array of strings or object) - List of courses the student is enrolled in.
graduation_year (number) - Expected year of graduation.

#### Academic Information:
major (string) - The student’s major or primary field of study.
minor (string) - The student’s minor field of study (if applicable).
gpa (float) - Current GPA of the student.
completed_credits (number) - The total number of credits completed.
semester (string) - Current or last semester the student attended (e.g., "Fall 2025").
courses (array of objects) - Each course can have subfields such as:
course_id (string)
course_name (string)
credits (number)
grade (string, e.g., "A", "B+")
semester_taken (string)

#### Parent or Guardian Information (optional):
guardian_name (string) - Name of the student's guardian.
guardian_relationship (string) - Relationship to the student (e.g., "father", "mother").
guardian_contact (object) - Contact information of the guardian (phone number, email).

#### Attendance and Performance:
attendance (array of objects) - Track attendance for each class or day:
date (Date)
status (string, e.g., "present", "absent", "late")
performance (array of objects) - Track student’s performance over time:
exam_name (string)
score (number)
date (Date)

#### Extra-curricular Information:
clubs (array of strings) - List of clubs or societies the student is a part of.
sports (array of strings) - Sports or athletic activities the student participates in.
volunteer_activities (array of objects) - Record of any volunteer work:
activity_name (string)
role (string)
duration (number of hours)

#### Miscellaneous Information:
scholarships (array of objects) - Details of scholarships the student has been awarded:
scholarship_name (string)
amount (number)
start_date (Date)
end_date (Date)
languages_known (array of strings) - List of languages the student is proficient in.
medical_conditions (array of strings) - List of any medical conditions (if applicable).
profile_picture (string) - URL or file path to the student’s profile picture.
social_media_links (array of objects) - Links to the student’s social media profiles (if needed):
platform (string, e.g., "LinkedIn", "Facebook")
url (string)


{
  "studentid": "S174641",
  "firstname": "Prasad",
  "lastname": "Mattaparthi",
  "fullname": "Prasad Mattaparthi",
  "dateofbirth": ISODate("1997-05-15T00:00:00Z"),
  "gender": "male",
  "email": "prmattap@yahoo.com",
  "phonenumber": "9093877122",
  "address": {
    "street": "Anna nagar street",
    "city": "Brookfield",
    "state": "KN",
    "zipcode": "560035"
  },
  "status": "active",
  "graduationyear": 2018
}


[
  {
    "studentid": "S174642",
    "firstname": "Gurram",
    "lastname": "Harika",
    "fullname": "Gurram Harika",
    "dateofbirth": "1997-08-12",
    "gender": "female",
    "email": "gurram.harika@gmail.com",
    "phonenumber": "+91-9093877123",
    "address": {
      "street": "Lakshmi Nagar",
      "city": "Brookfield",
      "state": "KN",
      "zipcode": "560036"
    },
    "status": "active",
    "graduationyear": 2018
  },
  {
    "studentid": "S174643",
    "firstname": "Hummaneni",
    "lastname": "Hemalatha",
    "fullname": "Hummaneni Hemalatha",
    "dateofbirth": "1996-11-20",
    "gender": "female",
    "email": "hummaneni.hemalatha@outlook.com",
    "phonenumber": "+91-9093877124",
    "address": {
      "street": "Venkatapuram",
      "city": "Hyderabad",
      "state": "AP",
      "zipcode": "500001"
    },
    "status": "active",
    "graduationyear": 2018
  },
  {
    "studentid": "S174644",
    "firstname": "Keerthivasan",
    "lastname": "Mani",
    "fullname": "Keerthivasan Mani",
    "dateofbirth": "1997-03-15",
    "gender": "male",
    "email": "keerthivasan.mani@gmail.com",
    "phonenumber": "+91-9093877125",
    "address": {
      "street": "Anna Salai",
      "city": "Chennai",
      "state": "TN",
      "zipcode": "600002"
    },
    "status": "active",
    "graduationyear": 2018
  },
  {
    "studentid": "S174645",
    "firstname": "Karthick",
    "lastname": "Murugan",
    "fullname": "Karthick Murugan",
    "dateofbirth": "1996-07-23",
    "gender": "male",
    "email": "karthick.murugan@outlook.com",
    "phonenumber": "+91-9093877126",
    "address": {
      "street": "Pallavaram Road",
      "city": "Chennai",
      "state": "TN",
      "zipcode": "600003"
    },
    "status": "active",
    "graduationyear": 2018
  },
  {
    "studentid": "S174646",
    "firstname": "Lakshashree",
    "lastname": "S",
    "fullname": "Lakshashree S",
    "dateofbirth": "1997-12-10",
    "gender": "female",
    "email": "lakshashree.s@gmail.com",
    "phonenumber": "+91-9093877127",
    "address": {
      "street": "Ramamurthy Nagar",
      "city": "Brookfield",
      "state": "KN",
      "zipcode": "560037"
    },
    "status": "active",
    "graduationyear": 2018
  },
  {
    "studentid": "S174647",
    "firstname": "Parvesh",
    "lastname": "S",
    "fullname": "Parvesh S",
    "dateofbirth": "1997-09-18",
    "gender": "male",
    "email": "parvesh.s@gmail.com",
    "phonenumber": "+91-9093877128",
    "address": {
      "street": "Dwarakanagar",
      "city": "Visakhapatnam",
      "state": "AP",
      "zipcode": "530016"
    },
    "status": "active",
    "graduationyear": 2018
  },
  {
    "studentid": "S174648",
    "firstname": "Prajjwal",
    "lastname": "Kumar",
    "fullname": "Prajjwal Kumar",
    "dateofbirth": "1996-04-05",
    "gender": "male",
    "email": "prajjwal.kumar@outlook.com",
    "phonenumber": "+91-9093877129",
    "address": {
      "street": "MG Road",
      "city": "Bengaluru",
      "state": "KN",
      "zipcode": "560038"
    },
    "status": "active",
    "graduationyear": 2018
  },
  {
    "studentid": "S174649",
    "firstname": "Priyanka",
    "lastname": "Deshpande",
    "fullname": "Priyanka Deshpande",
    "dateofbirth": "1997-01-14",
    "gender": "female",
    "email": "priyanka.deshpande@gmail.com",
    "phonenumber": "+91-9093877130",
    "address": {
      "street": "Indira Nagar",
      "city": "Lucknow",
      "state": "UP",
      "zipcode": "226016"
    },
    "status": "active",
    "graduationyear": 2018
  },
  {
    "studentid": "S174650",
    "firstname": "Hari",
    "lastname": "Krishna",
    "fullname": "Hari Krishna",
    "dateofbirth": "1997-05-21",
    "gender": "male",
    "email": "hari.krishna@gmail.com",
    "phonenumber": "+91-9093877131",
    "address": {
      "street": "Gandhi Nagar",
      "city": "Hyderabad",
      "state": "AP",
      "zipcode": "500002"
    },
    "status": "active",
    "graduationyear": 2018
  }
]
