package com.driver.test;

import static org.junit.Assert.assertEquals;
import org.junit.jupiter.api.Test;
import com.driver.A;
import com.driver.B;

public class TestCases {
    @Test
    public void testMethodOverride() {
        A obj = new B();
        assertEquals("Method is overridden in Extended class B", obj.meth());
    }
}
