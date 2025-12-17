---
slug: kubernetes for the curious cat
title: Kubernetes for the Curious Cat
authors: queendoline
---


If you have been around the tech world for a while, you have probably come across the buzzword [Kubernetes](https://kubernetes.io/docs/home/), also known as “**K8s**”, a few times, and perhaps thought to yourself, “What does this even mean?”

Reading this article today is proof that you have taken a stand against the wall to understand Kubernetes. If that is your case, then you are in the right place.

<!--truncate-->

By the end of this article, you are going to have a basic understanding of Kubernetes, its origin, and the problem Kubernetes solves in the software development industry. 

Before we go any further, let’s break down a few key terms you’ll come across in this article. 
- **Applications**: This is a software that runs on a system, usually built with code, and performs specific or different functions to make a system work for end users. Popular everyday applications are Spotify, Netflix, and Instagram. 

* **Containers**: These are software packages that contain everything an application needs to run smoothly in any environment, whether it’s a physical machine, the cloud, or on different operating systems. This is like packing all the clothes and items you need for a trip into one big suitcase. 

* **Docker**: This is the suitcase maker. [Docker](https://docs.docker.com/) automates the creation and packaging of these applications into containers. 

Now that we’ve understood these key terms, let’s get into more details about Kubernetes. 

## What is Kubernetes?
Kubernetes is an open source container orchestration tool that helps to deploy, scale, and manage multiple applications packaged in containers.  It was initially designed and created by Google in 2014, but was later transferred to the [Cloud Native Computing Foundation (CNCF)](https://www.cncf.io/), making it a community-driven technology, where developers from all over the world can contribute to it. 

## The problem before Kubernetes
Google did not develop Kubernetes from thin air; as with every software, there was a problem, and they built a solution. They needed a tool to manage their massive infrastructure, like Gmail, Google search, and YouTube. Because managing and scaling these applications manually was not ideal.  Let’s take a closer look at the core challenges Google and similar software companies faced. 

### The limitations of monolithic applications
Some applications were built as a singular unit, meaning that they were managed from a single unified codebase. If the developers needed to change a feature or an issue occurred in one feature, it could affect the entire application, and the developers would have to fix the whole application  and re-deploy it.  This took valuable time and was very inefficient for the scaling and performance of an application. Applications built this way are known as [https://www.ibm.com/think/topics/monolithic-architecture](monoliths).

- **From monoliths to microservices**
The challenges of building complex applications as monoliths led to the rise of [microservices](https://microservices.io/). Microservices are a software development architecture style where the application is broken down and built in smaller, independent services, each handling a specific feature of the app.

Take Netflix, for example: it has separate services for search, movie recommendations, streaming, and downloads. Each of these services can live in its own codebase, sometimes even written in different programming languages, but they all communicate with one another through APIs to keep the app running smoothly. If there is an issue with a particular service or feature, developers can quickly work on that and redeploy that feature without disrupting the whole app, unlike in monoliths. 


### Machine incompatibility
Even though the gradual shift to microservices solved the issue with monolithic applications. Developers still faced the common problem of “The app works on my machine, why isn’t it working on yours?”.

It was discovered that appS worked differently based on the environment they ran in. For example, an app that worked flawlessly on a Windows system might break or behave unexpectedly on Linux or macOS. Differences in operating systems, app configurations, libraries, and dependencies made it difficult to guarantee the consistent behavior of an app in different environments. 

- **Solving Compatibility with Virtual Machines**
This led to the use of [Virtual machines(VMs)](https://www.ibm.com/think/topics/virtual-machines). A virtual machine is essentially a computer running its own operating system, but hosted virtually inside a physical computer called a host machine. 
This means that a single physical computer could run multiple VMs with different operating systems (Windows, macOS, Unix), all working independently of one another. This temporarily solved the machine compatibility issue.

But VMs came with major drawbacks:

* Heavy resource usage –each VM required its own full operating system.
* Slow startup times –booting up VMs took significantly longer than expected.
* Inefficiency –running many VMs quickly drained the host machine’s resources.
These drawbacks led to the containerization of applications. 

## From Virtual Machines to Containers
Containers proved to be more lightweight and efficient than using virtual machines to run applications. By running applications in containers, they didn’t have to use a separate operating system like virtual machines, which consumed a great deal of resources; they would share the same operating system with the host machine, and they packaged an application with everything libraries, dependencies, etc,  needed to run smoothly in any environment. 

With tools like Docker, developers could easily spin up containers and integrate them into the development workflow, making it faster to build, test, and deploy applications.
This meant that whether an application was built as a monolith or as microservices, it could now be packaged into containers and reliably deployed to end users. But while containers solved the inefficiency of virtual machines and guaranteed consistency across environments, they also introduced a new challenge: the management of these containers as the app grows.  


## The introduction of container orchestration tools
Containers were lightweight and worked great, but what happens when there are several containerized applications working together? How can they be managed efficiently to maintain orderliness and make sure all the containers are working and communicating as they should with each other to keep an application running smoothly?

Although these containers can be managed by manually writing scripts, this can be very daunting and can lead to errors; developers thought, “there has to be a tool to automate container management”.
This is when container orchestration tools like Kubernetes were born. [Kubernetes](https://kubernetes.io/docs/home/) automates the deployment, functioning, and health of several containers, making it possible to run complex, containerized applications in an easy way. 

Let’s put this into perspective. Imagine a concert orchestra with violinists, cellists, and other musicians. Each player has their own instrument and sheet music, and they sit in their designated spot, ready to perform. You can think of each musician as an application, while their instrument and sheet music together represent a container.

Now, while each musician can play individually, the real magic happens when they all perform in sync. That’s where the conductor comes in. The conductor doesn’t play an instrument but ensures the entire orchestra works together seamlessly. They interpret the score, guide the tempo, signal entries, and make adjustments so that the performance sounds unified.

If a musician falls ill, the conductor ensures there is a replacement. If more musicians are needed for a louder or richer sound, the conductor arranges for them. In this way, the conductor manages the resources, timing, and harmony of the entire group.

That conductor? That’s Kubernetes. It orchestrates containers the same way a conductor orchestrates the musicians, making sure multiple containerized applications run smoothly. 
Google had already built two internal container orchestration systems, Borg and Omega, to manage its massive infrastructure. These tools powered Google’s services like Gmail, Search, and YouTube, and eventually created the framework for Google to build Kubernetes.

## Core components of Kubernetes
Kubernetes manages containers through a Kubernetes cluster. A cluster is a group of machines that work together to run containerized applications. It has two main parts:

- **Control Plane**: This is the “brain” of the cluster. It makes all the important decisions, like scheduling containers for deployment, monitoring their health, and scaling containers. 
- **Worker Nodes**: These are the machines that actually run the applications inside the containers. Each node receives instructions from the control plane and carries them out. Nodes are made up of pods, and pods wrap around one or more containers. 

Think back to our orchestra analogy; the control plane is like the conductor’s brain, where all the decisions are made. The worker nodes are like the conductor’s mouth, hands, and baton, carrying out those decisions to keep the orchestra in sync. Together, they ensure the entire performance, just like your applications, runs smoothly.

## Why companies are choosing Kubernetes
- **Effortless Scaling**: Kubernetes makes it simple to scale containerized applications. As the app grows with more users or traffic, Kubernetes can automatically allocate more resources to handle the load.

- **Self-Healing**: If a container crashes or fails in production, Kubernetes detects it and automatically replaces it with a new container, ensuring your application is always available to the users, therefore reducing application downtime. 

- **Microservices Management**: Kubernetes is built to run applications made up of many microservices. It organizes and manages all these small, independent applications so they work together smoothly.

## Kubernetes in the real world
Spotify is one of the most popular music streaming platforms in the world, and it ported to use Kubernetes due to its various microservices, such as user account services, playlist service, streaming, and music recommendations services. These are different microservices running in different containers. Kubernetes is used to manage these containers to make sure that Spotify users always have a seamless experience, also aiding faster deployments and scaling of the application. 

There you have it. In this article, we covered the basics of Kubernetes, its history, the problem that it solves in Modern software development, and a real-world application of Kubernetes.

Kubernetes has been such an integral addition to the software development lifecycle, making apps easier to run, efficient, and more scalable for growing functions and users. Are you interested in DevOps, and want to dive deeper into learning more about Kubernetes? Here is a deep dive [article](https://enix.io/en/blog/kubernetes-k8s/) on Kubernetes to get you started. 

