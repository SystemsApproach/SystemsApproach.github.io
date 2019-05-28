<!--- [!Note|style:flat|label:Error Detection or Correction|iconVisibility:hidden] --->
> **Error Detection or Correction**
>
> We have mentioned that it is possible to use codes that not only 
> detect the presence of errors but also enable errors to be corrected. 
> Since the details of such codes require yet more complex mathematics 
> than that required to understand CRCs, we will not dwell on them here. 
> However, it is worth considering the merits of correction versus 
> detection. 
> 
> At first glance, it would seem that correction is always better, since 
> with detection we are forced to throw away the message and, in 
> general, ask for another copy to be transmitted. This uses up 
> bandwidth and may introduce latency while waiting for the 
> retransmission. However, there is a downside to correction: it 
> generally requires a greater number of redundant bits to send an 
> error-correcting code that is as strong (that is, able to cope with 
> the same range of errors) as a code that only detects errors. Thus,
> while error detection requires more bits to be sent when errors occur,
> error correction requires more bits to be sent *all the time*. As a 
> result, error correction tends to be most useful when (1) errors are 
> quite probable, as they may be, for example, in a wireless 
> environment, or (2) the cost of retransmission is too high, for 
> example, because of the latency involved retransmitting a packet over 
> a satellite link. 
> 
> The use of error-correcting codes in networking is sometimes referred 
> to as *forward error correction* (FEC) because the correction of 
> errors is handled "in advance" by sending extra information, rather 
> than waiting for errors to happen and dealing with them later by 
> retransmission. FEC is commonly used in wireless networks such as 
> 802.11.
