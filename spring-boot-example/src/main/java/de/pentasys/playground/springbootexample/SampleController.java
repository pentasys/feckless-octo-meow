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

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Description;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * A controller for handling requests for hello messages
 */
@Controller
@Description("A controller for handling requests for hello messages")
public class SampleController {

    @Autowired
    private HelloWorldService helloWorldService;

    /**
     * Calls the HelloWorldService to get the hello message
     *
     * @return the message
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    @ResponseBody
    public Map<String, String> helloWorld() {
        return Collections.singletonMap("message",
                this.helloWorldService.getHelloMessage());
    }

    /**
     * Causes a server error
     *
     * @throws java.lang.IllegalArgumentException
     */
    @RequestMapping(value = "/foo", method = RequestMethod.GET)
    @ResponseBody
    public String foo() {
        throw new IllegalArgumentException("Server error");
    }
}
