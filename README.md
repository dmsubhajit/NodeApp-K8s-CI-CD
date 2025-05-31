# NodeApp-K8s-CI-CD

This project demonstrates a full DevOps workflow using GitHub Actions, Docker, and Kubernetes (Minikube).

## Tech Stack
- Node.js + express
- Docker
- Github Action
- Kubernetes (Minikube)

## 🚀 Features
- CI/CD pipeline on `main` branch push
- Auto-build Docker image and push to DockerHub
- Auto-deploy to Kubernetes cluster 

##  Usage

1. Clone repo:
   ```bash
   git clone https://github.com/dmsubhajit/NodeApp-K8s-CI-CD
   cd NodeApp-K8s-CI-CD

2. apply kubernetis local (minukube)

    ```bash
    cd NodeApp-K8s-CI-CD/k8s
    kubectl apply -f k8s/namespace.yaml
    kubectl apply -n nodeapp -f k8s/ 


access the app in your machine is minikube
```bash
kubectl get svc -n nodeapp
minikube service <service-name> --url


### Feu kubectls commands
```bash
kubectl delete all --all -n <name space>
kubectl get pods -n <name space>
kubectl get deployments -n <name space>
kubectl get svc -n <name space>
kubectl logs <pod name>

