<!--- [!Note|style:flat|label:Simple Probability Calculations|iconVisibility:hidden] --->
> **Simple Probability Calculations**
>
> When dealing with network errors and other unlikely (we hope) events,
> we often have use for simple back-of-the-envelope probability 
> estimates. A useful approximation here is that if two independent 
> events have *small* probabilities $$p$$ and $$q$$, then the probability of 
> either event is $$p+q$$. The exact answer is 
> 
> $$1-(1-p)(1-q) = p+q-pq$$ 
> 
> but for small probabilities like $$p=q=.01$$, our estimate gives us 
> $$.02$$, while the exact value is $$.0199$$. Close enough. 
> 
> For a simple application of this, suppose that the per-bit error rate 
> on a link is 1 in $$10^{7}$$. Now suppose we are interested in 
> estimating the probability of at least one bit in a 10,000 bit packet 
> being errored. Using the above approximation repeatedly over all the 
> bits, we can say that we are interested in the probability of either 
> the first bit being errored, or the second bit, or the third, etc. 
> Assuming bit errors are all independent (which they aren't), we can 
> therefore estimate that the probability of at least one error in a 
> 10,000-bit ($$10^4$$ bit) packet is $$10^4 \times 10^{-7} = 10^{-3}$$. 
> The exact answer, computed as $$1-P(\mathrm{no\ errors})$$, would be 
> $$1-(1-10^{-7})^{10,000} = .00099950$$. 
> 
> For a slightly more complex application, we compute the probability of 
> exactly two errors in such a packet; this is the probability of an 
> error that would sneak past a 1-parity-bit checksum. If we consider 
> two particular bits in the packet, say bit $$i$$ and bit $$j$$, the 
> probability of those exact bits being errored is 
> $$10^{-7} \times 10^{-7}$$. Now the total number of possible bit 
> pairs in the packet is 
> 
> $$\left( \begin{array}{c} 10^4 \\ 2 \end{array} \right) = 10^4 \times 
(10^4 - 1) / 2 \approx 5 \times 10^7$$ 
> 
> So again using the approximation of repeatedly adding the 
> probabilities of many rare events (in this case, of any possible bit 
> pair being errored), our total probability of at least two errored 
> bits is $$5 \times 10^7 \times 10^{-14} = 5 \times 10^{-7}$$. 
