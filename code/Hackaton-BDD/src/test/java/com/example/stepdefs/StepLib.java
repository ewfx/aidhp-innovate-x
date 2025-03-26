
package com.example.stepdefs;

        import io.cucumber.java.en.*;
        import java.io.BufferedReader;
        import java.io.InputStreamReader;
        import java.io.OutputStream;
        import java.net.HttpURLConnection;
        import java.net.URL;
        import java.util.Base64;

        import static org.junit.Assert.*;

public class StepLib {

    private String response;


    @When("I send a GET request to {string}")
    public void iSendAGETRequestTo(String endpoint) {
        try {
            URL url = new URL("http://localhost:8080/api/auth" + endpoint);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder content = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }

            in.close();
            connection.disconnect();

            response = content.toString();
        } catch (Exception e) {
            e.printStackTrace();
            fail("Failed to send GET request");
        }
    }

    @When("I send a POST request to {string} with the data")
    public void iSendAPOSTRequestToWithTheData(String endpoint) {
        try {
            URL url = new URL("http://localhost:8080/api/auth" + endpoint);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Content-Type", "application/json; utf-8");
            connection.setRequestProperty("Accept", "application/json");
            connection.setDoOutput(true);

            String auth = "username:password"; // Replace with actual username and password
            String encodedAuth = Base64.getEncoder().encodeToString(auth.getBytes());
            connection.setRequestProperty("Authorization", "Basic " + encodedAuth);

            String jsonInputString = "{\"email\":\"swarnalasya\",\"password\":\"Lasya\"}";
            try(OutputStream os = connection.getOutputStream()) {
                byte[] input = jsonInputString.getBytes("utf-8");
                os.write(input, 0, input.length);
            }

            BufferedReader in;
            if (connection.getResponseCode() >= 200 && connection.getResponseCode() < 300) {
                in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "utf-8"));
            } else {
                in = new BufferedReader(new InputStreamReader(connection.getErrorStream(), "utf-8"));
            }
            StringBuilder content = new StringBuilder();
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine.trim());
            }
            in.close();
            connection.disconnect();

            response = content.toString();
        } catch (Exception e) {
            e.printStackTrace();
            fail("Failed to send POST request");
        }
    }

    @When("I send a POST signup request to {string} with the data")
    public void iSendAPOSTSignUpRequestToWithTheData(String endpoint) {
        try {
            URL url = new URL("http://localhost:8080/api/auth" + endpoint);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Content-Type", "application/json; utf-8");
            connection.setRequestProperty("Accept", "application/json");
            connection.setDoOutput(true);

            String auth = "username:password"; // Replace with actual username and password
            String encodedAuth = Base64.getEncoder().encodeToString(auth.getBytes());
            connection.setRequestProperty("Authorization", "Basic " + encodedAuth);

            String jsonInputString = "{\"email\":\"swarnalasya1\",\"password\":\"Lasya1\"}";
            try(OutputStream os = connection.getOutputStream()) {
                byte[] input = jsonInputString.getBytes("utf-8");
                os.write(input, 0, input.length);
            }

            BufferedReader in;
            if (connection.getResponseCode() >= 200 && connection.getResponseCode() < 300) {
                in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "utf-8"));
            } else {
                in = new BufferedReader(new InputStreamReader(connection.getErrorStream(), "utf-8"));
            }
            StringBuilder content = new StringBuilder();
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine.trim());
            }
            in.close();
            connection.disconnect();

            response = content.toString();
        } catch (Exception e) {
            e.printStackTrace();
            fail("Failed to send POST request");
        }
    }


    @Then("the response should be returned")
    public void theResponseShouldContain() {
        assertNotNull(response);
    }
}