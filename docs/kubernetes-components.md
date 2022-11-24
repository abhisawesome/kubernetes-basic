# Kubernetes components

A Kubernetes cluster consists of a set of worker machines, called nodes, that run containerized applications. Every cluster has at least one worker node.


The worker node(s) host the Pods that are the components of the application workload. The control plane manages the worker nodes and the Pods in the cluster. In production environments, the control plane usually runs across multiple computers and a cluster usually runs multiple nodes, providing fault-tolerance and high availability.


![screenshot](/screenshots/components.png?raw=true)



## Control plane components

- The control plane's components make global decisions about the cluster (for example, scheduling), as well as detecting and responding to cluster events (for example, starting up a new pod when a deployment's replicas field is unsatisfied).

- Control plane components can be run on any machine in the cluster.

### kube-apiserver

- Exposes the Kubernetes API. The API server is the front end for the Kubernetes control plane.

### etcd

- Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data.


### kube-scheduler

- Control plane component that watches for newly created Pods with no assigned node, and selects a node for them to run on.

### kube-controller-manager

- Control plane component that runs controller processes.
Some types of these controllers are:
    - Node controller: Responsible for noticing and responding when nodes go down.
    - Job controller: Watches for Job objects that represent one-off tasks, then creates Pods to run those tasks to completion.
    - EndpointSlice controller: Populates EndpointSlice objects (to provide a link between Services and Pods)
    - ServiceAccount controller: Create default ServiceAccounts for new namespaces.

### cloud-controller-manager

- A Kubernetes control plane component that embeds cloud-specific control logic.




## Node components


Node components run on every node, maintaining running pods and providing the Kubernetes runtime environment.

### kubelet

- It makes sure that containers are running in a Pod.

### kube-proxy 
- kube-proxy maintains network rules on nodes. These network rules allow network communication to your Pods from network sessions inside or outside of your cluster.
