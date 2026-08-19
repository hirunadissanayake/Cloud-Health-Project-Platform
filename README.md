# Cloud Health Platform

The platform layer for the Cloud Health Project. It provides centralized configuration, service discovery, and a single API entry point for all healthcare microservices.

## About

This repository is part of the ITS 2130 Enterprise Cloud Architecture final project. It will act as a parent Git repository whose four platform components are attached as Git submodules.

## Components

| Component | Port | Repository |
|---|---:|---|
| Config Server | `8888` | `Cloud-Health-Project-Platform-Config-Server` |
| Discovery Server | `8761` | `Cloud-Health-Project-Platform-Discovery-Server` |
| API Gateway | `8080` | `Cloud-Health-Project-Platform-Api-Gateway` |
| Configuration Repository | — | `Cloud-Health-Project-Platform-Config-Repository` |

## Tech Stack

| Technology | Details |
|---|---|
| Java | 25 |
| Spring Boot | 4.1.0 |
| Spring Cloud | 2025.1.2 |
| Spring Cloud Config | Centralized configuration |
| Netflix Eureka | Service registration and discovery |
| Gateway Server Web MVC | API routing and load balancing |
| Spring Boot Actuator | Health and readiness endpoints |
| PM2 | Process supervision on application VMs |

## Getting Started

Start the platform in this order:

1. Config Server (`8888`)
2. Discovery Server (`8761`)
3. API Gateway (`8080`)
4. Domain services

Local development uses the native Config Server backend. Google Cloud deployment sets `SPRING_PROFILES_ACTIVE=git`, `CONFIG_GIT_URI`, and `CONFIG_GIT_BRANCH` to load the external Git repository.

## Project Details

| Property | Value |
|---|---|
| Student | Hiruna Dissanayake |
| Student number | `24171104` |
| GCP project | `cloud-health-506015-hiruna` |
| Parent repository | `Cloud-Health-Project-Platform` |
