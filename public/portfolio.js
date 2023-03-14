const portfolio = (name)=>{
let str = ''

if(name == "github"){
str = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Github portfolio</title>
    <style>
        body{
            background-color:  #B4C2C6 ;
        }
        .main {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .main pre {
            padding: 20px;
            width: 800px;
            display: inline-block;
            white-space: pre-wrap;
            text-align: justify;
            font-size: 20px;
            background-color: #E3EDF5;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        }
    </style>
</head>

<body>
    <div style="text-align: center;">
        <h1>Github portfolio</h1>
    </div>
    <div class="main">
        <pre>GitHub is a web-based hosting service for version control using Git. It is primarily used for computer code. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project. GitHub offers both plans for private and free repositories on the same account which are commonly used to host open-source software projects.

 

1. Create a GitHub account

Create your own GitHub account by signing up at https://github.com/.

 

2. Install Git

Download and install the latest version of Git on your machine.

 

3. Create a repository

Create your own repository (or “repo”) on GitHub. This is essentially a folder that stores all your project files and the code you write.

 

4. Push your code

Push your code to your repository. This is essentially uploading your code to the repo or saving it in the folder.

 

5. Connect with other developers

Connect with other developers on GitHub and collaborate on projects. You can also use the platform to search for jobs and find new projects to work on.

 

6. Explore open source projects

Explore open source projects on GitHub and get involved in the community. You can find tons of interesting projects to work on, as well as get feedback from experienced developers.



1. Create a GitHub account: The first step to creating a complete portfolio on GitHub is to create an account. If you don’t have an account yet, you can sign up for free.

 

2. Decide what type of project you want to showcase: Think about the types of projects you’ve completed in the past, the ones you’re currently working on, and the ones you’d like to work on in the future. This will help you decide which projects to showcase in your portfolio.

 

3. Create a README file for each project: Every GitHub project should have a README file that explains the purpose of the project and how to use it. This file should include a list of the project’s features, how to get started with it, and any other relevant information.

 

4. Add project screenshots and images: Adding screenshots and images to your project can help give potential employers and collaborators a better idea of what you’ve been working on.

 

5. Link to your projects on other websites: If you have projects on other platforms, such as CodePen or Glitch, make sure to link to them in your README files. This will help you get more
            </pre>
    </div>
</body>

</html>
`
}
else if(name == 'linkedin'){
str = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linkedin portfolio</title>
    <style>
        body{
            background-color:  #B4C2C6 ;
        }
        .main {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .main pre {
            padding: 20px;
            width: 800px;
            display: inline-block;
            white-space: pre-wrap;
            text-align: justify;
            font-size: 20px;
            background-color: #E3EDF5;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        }
    </style>
</head>

<body>
    <div style="text-align: center;">
        <h1>LinkedIn portfolio</h1>
    </div>
    <div class="main">
        <pre>LinkedIn is one of the most important tools in cracking a good job. It is not only a great networking platform, but it also provides employers and recruiters with an easy way to research potential candidates and to reach out and contact them. By creating a professional profile, maintaining an active presence, and leveraging the platform to network, you can leverage LinkedIn to help you crack a good job.

How to create LinkedIn?
            
1. Sign up for a free LinkedIn account.
            
             
            
2. Create a professional profile, including a profile picture, headings, and a summary of your qualifications and experience.
            
             
            
3. Begin connecting with people you know and trust.
            
             
            
4. Start building your network by joining relevant professional groups and following companies and organizations in your industry.
            
             
            
5. Update your profile regularly with new experiences and accomplishments.
            
             
            
6. Participate in relevant conversations and posts to increase your visibility.
            
             
            
7. Use LinkedIn to search for job opportunities and reach out to potential employers.
            
             
            
8. Use LinkedIn analytics to monitor the success of your profile and the impact of your online presence.</pre>
    </div>
</body>

</html>
`
}
else if(name == "os"){
str = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Open source portfolio</title>
    <style>
        body{
            background-color:  #B4C2C6 ;
        }
        .main {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .main pre {
            padding: 20px;
            width: 800px;
            display: inline-block;
            white-space: pre-wrap;
            text-align: justify;
            font-size: 20px;
            background-color: #E3EDF5;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        }
    </style>
</head>

<body>
    <div style="text-align: center;">
        <h1>Open source portfolio</h1>
    </div>
    <div class="main">
        <pre>Freshers can contribute to open source in a variety of ways. They can join an existing open-source project, contribute code, create documentation, report bugs, or help promote the project. Freshers’ can also create their own open-source project, allowing others to freely use and contribute to the project. Creating a successful open-source project can be a great way to demonstrate technical and communication skills, as well as collaboration and leadership, to employers

            Top opensource websites
            
            https://hacktoberfest.com/donate/.</pre>
    </div>
</body>

</html>
`
}
else if(name == "resume"){
str = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume portfolio</title>
    <style>
        body{
            background-color:  #B4C2C6 ;
        }
        .main {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .main pre {
            padding: 20px;
            width: 800px;
            display: inline-block;
            white-space: pre-wrap;
            text-align: justify;
            font-size: 20px;
            background-color: #E3EDF5;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        }
    </style>
</head>

<body>
    <div style="text-align: center;">
        <h1>Resume portfolio</h1>
    </div>
    <div class="main">
<pre>What is a resume?
A resume is a formal document that summarizes a person's educational background, work experience, and other relevant qualifications for a job. 
                       
Importance of resume
            
It is important to freshers because it gives employers an overview of the individual's qualifications and helps them decide whether or not the person is the right fit for the job.A resume is a great way for freshers to demonstrate their skills and abilities to a potential employer.It also helps freshers to stand out when compared to other candidates who are applying for the same job.
                       
                       
A resume also serves as a way to show a potential employer that the individual is organized, detail-oriented, and has the ability to present themselves in a professional manner
Steps to be followed during preparing a resume?
                       
1. Start with Contact Information: List your full name, address, phone number, and email address at the top of the page.
2. Include a Summary Statement: Write a summary statement that briefly outlines your professional experience and qualifications.
3. List Your Professional Experience: Include the most recent positions you’ve held, followed by the ones before that. Include the company name, job title, and dates of employment.
4. Add Education Information: Include the degrees you’ve earned, where you attended school, and any special awards you received.
5. Include Your Skills: List any relevant skills or qualifications you have.
6. Include Certifications or Licenses: If applicable, list any professional certifications or licenses you have.
7. Include Any Additional Information: If applicable, include any additional information that could help you stand out from other candidates.
8. Proofread and Edit: Make sure to read over your resume carefully and make any necessary changes.</pre>
    </div>
</body>

</html>
`
}

return str
}

module.exports = portfolio