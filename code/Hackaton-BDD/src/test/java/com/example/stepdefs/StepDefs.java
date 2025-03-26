package com.example.stepdefs;

import io.cucumber.java.en.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.Assert;

public class StepDefs {
    WebDriver driver;

    @When("User enters valid username and password")
    public void user_enters_valid_username_password() {
        driver.findElement(By.id("username")).sendKeys("swarnalasya");
        driver.findElement(By.id("password")).sendKeys("Lasya");
        driver.findElement(By.id("login")).click();
    }

    @When("User enters invalid username and password")
    public void user_enters_invalid_username_password() {
        driver.findElement(By.id("username")).sendKeys("wrongUser");
        driver.findElement(By.id("password")).sendKeys("wrongPass");
        driver.findElement(By.id("login")).click();
    }

    @Given("the user is on the signup page")
    public void theUserIsOnTheSignupPage() {
        System.setProperty("webdriver.chrome.driver", "/opt/homebrew/bin/chromedriver");
        driver = new ChromeDriver();
        driver.get("http://localhost:8080/signup");
    }

    @When("the user enters valid signup details")
    public void theUserEntersValidSignupDetails() {
        System.setProperty("webdriver.chrome.driver", "/opt/homebrew/bin/chromedriver");
        driver = new ChromeDriver();
        driver.get("http://localhost:8080/signup");
        driver.findElement(By.id("username")).sendKeys("newuser");
        driver.findElement(By.id("password")).sendKeys("password");
        driver.findElement(By.id("email")).sendKeys("newuser@example.com");
        driver.findElement(By.id("signup")).click();
    }

}