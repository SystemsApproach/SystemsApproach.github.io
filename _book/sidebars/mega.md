<!--- [!Note|style:flat|label:How Big is a Mega?|iconVisibility:hidden] --->
> **How Big is a Mega?**
>
> There are several pitfalls you need to be aware of when working with 
> the common units of networking, such as MB and Mbps. The first is 
> to distinguish carefully between bits and bytes. Throughout this book,
> we always use a lowercase *b* for bits and a capital *B* for bytes. 
> The second is to be sure you are using the appropriate definition of 
> giga (G), mega (M) and kilo (K). *Mega,* for example, can mean either 
> 2$$^{20}$$ or 10$$^6$$. Similarly, *kilo* can be either 2$$^{10}$$ or 
> 10$$^3$$ and *giga* can be either 2$$^{30}$$ or 10$$^9$$. 
> What is worse, in networking we typically use both definitions. Here's 
> why. 
>
> Network bandwidth, which is often specified in terms of Mbps, is 
> typically governed by the speed of the clock that paces the 
> transmission of the bits. A clock that is running at 10 MHz is used to 
> transmit bits at 10 Mbps. Because the *mega* in MHz means 
> 10$$^6$$ hertz, Mbps is usually also defined as 10$$^6$$ bits per second. 
> (Similarly, Gbps is 10$$^9$$ bits per second.) On the other hand, when 
> we talk about a message that we want to transmit, we often give its 
> size in bytes. Because messages are stored in the computer's 
> memory, and memory is typically measured in powers of two, the *K* in 
> KB is usually taken to mean 2$$^{10}$$. (Similarly, MB usually means 
> 2$$^{20}$$ and GB usually means 2$$^{30}$$.) When you put the two 
> together, it is not uncommon to talk about sending a 32-KB message 
> over a 10-Mbps channel, which should be interpreted to mean 32 x 
> 2$$^{10}$$ x 8 bits are being transmitted at a rate of 10 x 10$$^6$$ 
> bits per second. This is the interpretation we use throughout the 
>book, unless explicitly stated otherwise. 
> 
> The good news is that many times we are satisfied with a 
> back-of-the-envelope calculation, in which case it is perfectly 
> reasonable to make the approximation that 10$$^6$$ is really equal to 
> 2$$^{20}$$ (making it easy to convert between the two definitions of 
> mega). This approximation introduces only a 5% error. We can even make 
> the approximation in some cases that a byte has 10 bits, a 20% error 
> but good enough for order-of-magnitude estimates. 
>
> While we're making quick-and-dirty calculations, 100 ms is a 
> reasonable number to use for a cross-country round-trip time—at 
> least when the country in question is the United States—and 1 ms is 
> a good approximation of an RTT across a local area network. In the 
> case of the former, we increase the 48-ms round-trip time implied by 
> the speed of light over a fiber to 100 ms because there are, as we 
> have said, other sources of delay, such as the processing time in the 
> switches inside the network. You can also be sure that the path taken 
> by the fiber between two points will not be a straight line.
