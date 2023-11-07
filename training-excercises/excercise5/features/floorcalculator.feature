Feature: floor calculator

    Scenario: calculate the packages
        Given a product with 2.69 square meter per package
        When calculate the number of packages needed for 10 by 10 meters
        Then the number of packages should be 38
