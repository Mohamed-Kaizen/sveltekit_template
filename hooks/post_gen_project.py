#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
import pathlib
import shutil
import subprocess

ALL_TEMP_FOLDERS = ["licenses"]

ALL_TEMP_Files = []


def create_git_repo() -> None:
    try:
        subprocess.call(["git", "init", "-q"])
        os.rename("git_ignore", ".gitignore")
        subprocess.call(["pre-commit", "install", "--hook-type", "commit-msg"])

    except Exception as error:
        print(error)


def create_env_file() -> None:
    with open(".env", "w") as file:
        file.write("")


def remove_temp_files_folders(*, temp_folders: list[str], files) -> None:
    for folder in temp_folders:
        shutil.rmtree(folder)

    for file in files:
        os.remove(file)

def makedir(path: str) -> None:
    """Create the directory if it does not exist."""
    pathlib.Path(path).mkdir(parents=True, exist_ok=True) 

def checker() -> None:
    """Checking the project options and removing the unused files and folders."""
    if "{{cookiecutter.use_typesafe_i18n}}" != "y":
        ALL_TEMP_FOLDERS.append("src/i18n")
        ALL_TEMP_Files.append(".typesafe-i18n.json")
        ALL_TEMP_Files.append("src/routes/[[lang]]/+layout.ts")

    if "{{cookiecutter.use_playwright}}" != "y":
        ALL_TEMP_Files.append("playwright.config.ts")
        ALL_TEMP_FOLDERS.append("tests")



if __name__ == "__main__":
    checker()

    remove_temp_files_folders(temp_folders=ALL_TEMP_FOLDERS, files=ALL_TEMP_Files)

    create_env_file()

    create_git_repo()