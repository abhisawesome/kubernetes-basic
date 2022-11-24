# Kubernetes

## Why you need Kubernetes 

Containers are a good way to bundle and run your applications.Suppose if a container goes down and another container needs to start. Wouldn't it be easier if this behavior was handled by a system?
That's how Kubernetes comes to the rescue! Kubernetes provides you with a framework to run distributed systems resiliently. It takes care of scaling and failover for your application, provides deployment patterns, and more. For example: Kubernetes can easily manage a canary deployment for your system.

Kubernetes provides you with:
1. **Service discovery and load balancing** Can expose the container using DNS and manage the traffic on the container.
2. **Storage orchestration** automatically mount a storage system such as local storages, public cloud providers, and more.
3. **Automated rollouts and rollbacks**  For example, you can automate Kubernetes to create new containers for your deployment, remove existing containers and adopt all their resources to the new container.
4. **Automatic bin packing**  You tell Kubernetes how much CPU and memory (RAM) each container needs. Kubernetes can fit containers onto your nodes to make the best use of your resources.
5. **Self-healing** Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to your user-defined health check
6. **Secret and configuration management** Kubernetes lets you store and manage sensitive information, such as passwords, OAuth tokens, and SSH keys. You can deploy and update secrets and application configuration without rebuilding your container images, and without exposing secrets in your stack configuration



## Sections

- [Kubernetes Components](/docs/kubernetes-components.md)

