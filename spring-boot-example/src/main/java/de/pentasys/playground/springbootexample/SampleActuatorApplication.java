/*
 * Copyright 2012-2013 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package de.pentasys.playground.springbootexample;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * The application
 */
@Configuration
@EnableAutoConfiguration
@EnableConfigurationProperties
@EnableSwagger2
@ComponentScan
public class SampleActuatorApplication {

    /**
     * Bootstraps the application
     *
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {
        SpringApplication.run(SampleActuatorApplication.class, args);
    }

    @Bean
    public Docket sampleActuatorApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("actuator-api")
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build()
                .apiInfo(apiInfo());
    }

    @Autowired
    private ServiceProperties configuration;

    private ApiInfo apiInfo() {
        return new ApiInfo(
                "Sample Actuator REST-API documentation",
                "Description",
                configuration.getVersion(),
                "",
                "danny.winter@pentasys.de",
                "MIT License",
                "https://opensource.org/licenses/MIT"
        );
    }

}
