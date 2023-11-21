This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
-   Clone the repository
-   Add .env file
-   Add the environment variables for clerk authentication
-   Add DATABASE_URL
-   run

```bash
npx prisma generate
```

- then run 

```bash
npx prisma db push
```

- Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features
This is my tentative plan to build the following features in the first version of the app
1. Any user can be a Teacher or a student.
2. Teacher should be able to create Quiz.
3. For simplicity we will only have multiple choice questions.
4. Teacher should be able to decide the number of question in each quiz.
5. Teacher should be able to create question and its four choices.
6. Question, their choices, correct answers and time allowed in seconds should be stored in a mysql database.
7. A random 6 digit number should be automatically assigned to the quiz that has not already been assigned to any quiz before.
8. Teacher should be able to share the code with students outside of the platform.
9. Students when put the code in platform have access to that quiz.
10. Student should see a timer of 3 seconds before each question.
11. All students should see the same question.
12. Multiple choices should be seen as boxes in lower one third of screen and question in upper one third.
13. Students should be able to select the option.
14. After the timer goes off as specified for the timer for each question  then result of that question is visible to the student.
15. app should wait for all students to attempt the question before starting the next question.
16. At the end the leaderboard is shown to all the students.
17. Leaderboard is visible to teacher at all times.
18. time taken to attempt should also be considered in giving the scoring to students.

## Steps to Follow to achieve above plan
To proceed with creating your online quiz app using Next.js, you can follow these steps:

1. Set up the development environment:
   - Ensure you have Node.js installed on your machine.
   - Create a new Next.js project using the command: `npx create-next-app sj-quizz`.
   - Install necessary dependencies(prisma and prisma client, @clerk/nextjs) by running `npm install` in the project root directory.

2. Configure the MySQL database and setup clerk authentication:
   - In the `lib/prismadb.ts` file, implement the necessary functions to connect to your MySQL database and perform CRUD operations for storing quiz data.
   - Follow clerkjs docs to setup clerk authentication.

3. Implement the API routes:
   - In the `app/api/quiz/[quizid]/route.ts` file, define the API route handlers for creating a quiz, retrieving quiz information, and submitting quiz answers.
   - Similarly, in the `app/api/user/[userid]/route.ts` file, define the API route handlers for managing user information.

4. Create the components:
   - Implement the necessary components for the quiz app, such as `Layout`, `Navbar`, `Footer`, `Quiz`, `Question`, `AnswerOption`, `Timer`, `Result`, `Student`, and `Teacher`.
   - These components will handle the UI and user interactions for the quiz app.

5. Implement the quiz creation functionality:
   - In the `app/quiz/create/page.tsx` file, create a form that allows teachers to create a quiz by specifying the number of questions, the question text, answer options, and correct answers.
   - Use the API route for creating a quiz to save the quiz data to the MySQL database.

6. Implement the quiz display and submission functionality:
   - In the `app/quiz/[quizid]/page.tsx` file, retrieve the quiz data from the API route and display the questions one by one to the students.
   - Use the `Timer` component to display a countdown timer for each question.
   - Allow students to select an answer option and submit their answers using the API route for submitting quiz answers.

7. Implement the leaderboard functionality:
   - In the `app/quiz/leaderboard/page.tsx` file, retrieve the quiz data from the API route and display the leaderboard showing the scores and time taken for each student.
   - Ensure the leaderboard is visible to both students and the teacher.

8. Style and customize the app:
   - Modify the existing CSS files or create new ones in the `styles` directory to style the components and layout according to your design preferences.
   - Customize the `Layout`, `Navbar`, and `Footer` components to match your app's branding.

9. Test and debug the app:
   - Run the app using `npm run dev` and test the functionality to ensure it meets your requirements.
   - Debug any issues that arise during testing and make necessary adjustments to the code.

10. Deploy the app:
    - Once you are satisfied with the app's functionality and testing, deploy it to a hosting platform of your choice, such as Vercel or Heroku.
    - Follow the deployment instructions specific to your chosen hosting platform.

Remember to continuously test and iterate on your app as you develop it to ensure a smooth user experience. Good luck with your online quiz app!
