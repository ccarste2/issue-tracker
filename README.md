# Issue Tracker Requirements Specification

## 1. Introduction

This document provides a description of the functionality and overall requirements for the issue tracker application. The intended audience includes developers, testers, project managers, and investors.

## 2. Purpose

The purpose of the issue tracker application is to provide software development professionals with a systematic way of tracking the progress of software projects. Users are able to create, read, update, and delete issues, which could be bugs, feature requests, customer problems, or anything else. By breaking the project into these smaller tasks and keeping the development team informed as to the status of each, developers will be more productive and create higher-quality applications.

## 3. Intended Audience

The intended audience is an enterprise software development team.

## 4. Functionality

- Users should be able to create accounts and log in and out.
- Users should be able to create new projects for which issues can be tracked.
- Users should be able to add new issues, including data about the type and priority.
- Issues can be assigned to a particular developer to address.
- Users should be able to write comments to maintain a conversation about each issue.

## 5. Platform

The application will be developed with React, using Node and MongoDB for the backend and database.

## 6. User Roles

Developer
- Can update issue details, including priority and progress, of issues they are assigned.
- Can self-assign unassigned issues.
- Can review and comment on any issue within projects they are assigned to.

Submitter
- All of the above.
- Can create new issues.

Project Manager
- Can create and delete projects.
- Can assign and unassign developers and submitters to projects they manage.

Admin
- All of the above.
- Can edit all user profiles.
- Can assign and unassign project managers to projects.
