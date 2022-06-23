# orange-loop test questions

<h2>Question 1 and 2</h2>
<p>
    The answer of these questions are provided in q1.ts and q2.ts.
    Run the followings:
</p>

        npm i -g ts-node
        ts-node ./q1.ts
        ts-node ./q2.ts

<h2>
    Question 3 - Resource-limited Decision Making
</h2>
<p>
    According to multi-threading programming concepts, considering that the two tasks do not depend on each other, we are able to execute each of them in two separate threads. In case of having a single core CPU, the Operating System (OS) adopts concurrency to create time slices and allocates the resource to one task in each time slice. By using this approach, we are able to complete the both tasks in an overlapping time.
    In case of having a multi core CPU, the OS manages to assign at least one core to each thread. In this case, we parallelized the process, and both tasks will be completed in 2 hours.
</p>

<hr/>

<h2>
    Question 4 - Resource-effective Design Skills
</h2>
<p>
First step to build a software application is to recognize our needs. Thus, it is ncessary to write our requirements. It is the first stage of the UML documentation process as well. UML describes the entire path of development of an application. The most important items in UML are as follows: 
</p>
<ul>
    <li>Requirements</li>
    <li>User Story</li>
    <li>Use-cases</li>
    <li>Use-case Diagram</li>
    <li>System Sequence Diagram</li>
    <li>Domain Model</li>
    <li>Class Diagram</li>
</ul>
<p>
    Next, We are ready to design the database and models. In this stage, entities and relationships between them will be recognized. This is a prototype of the real database.
</p>

<p>
    Choosing the right technological stack is an important task. It depends on what do we need to present. In this case, we are trying to reduce the cost of development and the development time. It is suggested to create a cross-platform application or a web-application, because you are focusing on having a variety of users with different devices. At the same time, you are not able to afford the cost of creating 2 or 3 different client apps. Thus, instead of using native apps, you can choose hybrid applications and web applications such as PWA, ReactJS, VueJS, Flutter to cover the most of the devices.
</p>

<p>
    In modern applications such as JustEat, there is a need to store unstructured data in the database. This type of data is usually collected from users and will be used to improve the user experience. In such cases, it is recommended to use NoSQL databases like MongoDB instead of relational DBs (MariaDB, MySQL, Postgress, etc.) NoSQL databases are better at storing unstructured data and making aggregations.
</p>

<p>
    Backend: The asynchronous property of NodeJS provides a high speed API for the application. Moreover, being similar to JS (TS) syntax of the client Frameworks encourages us to use NodeJS as the backend technology. There are many backend programming languages such as PHP, Java Spring, etc. 
    The key advantages of NodeJS are as follows:
</p>

<ol>
    <li>usefull in small teams</li>
    <li>lots of frameworks</li>
    <li>enormous community of developers</li>
    <li>great number of libraries</li>
</ol>

<p>
    Some of the most popular tech stacks: MEAN, MERN, MEVN
</p>

<p>
    After choosing the proper tech stack for development, the development team supposed to draw the wireframes and user-flow diagrams. By creating the former, we will be able to have an idea of the final shape of the application, and the latter helps us to have an understanding of the flow of each transaction.
</p>



<h3> Deployment and Infrastructure </h3>
<p>
    This is one of the key parts of developing an application. The application should not go down on heavy loads of users or requests. Choosing the right infrastructure and deployment techniques can make an outstanding application. Cloud service providers like Google Cloud Platform and Amazon Web Service offer many cloud computing services Like Iaas, DBaaS, Paas, Serverless, etc. 
    It is recommended to deploy the container images on Iaas servers and manage them, but in order to lower the cost of the application we can use serverless computing service of AWS Lambda. In this approach, We do not worry of how many Gigabytes of RAM or Storage should we asign to our server or how to manage them. It is worth mentioning that this approach brings less control on the resources.
</p>
