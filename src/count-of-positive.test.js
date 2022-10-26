import {countSum} from "./count-of-positives";

test('counts postive nums add negative nums', ()=>{
    expect(countSum([1,2,3,-1,-2,-3])).toBe([3,-6])
    expect(countSum([1,5,3,5,-100,-30,-3])).toBe([4,-133])
    expect(countSum([5,-3])).toBe([1,-3])
    expect(countSum([-1,2,-3,1,-2,-3,10,10,-4])).toBe([4,-13])
})

test('returns empty array when input is null or empty', ()=>{
    expect(countSum([])).toBe([])
    expect(countSum(null)).toBe([])
})
