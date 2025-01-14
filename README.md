# mobile_epu

![alt text](image-1.png)

# So sánh FlatList và SectionList

## 1. Mục đích sử dụng

- **FlatList**:
  - Dùng để hiển thị danh sách phẳng (một chiều), trong đó tất cả các mục nằm trên cùng một cấp.
  - Phù hợp khi dữ liệu không cần phân chia thành các nhóm hoặc phần riêng biệt.

- **SectionList**:
  - Dùng để hiển thị danh sách phân nhóm, trong đó các mục được chia thành các phần (sections) khác nhau.
  - Phù hợp khi cần nhóm các mục theo danh mục hoặc nhóm logic.

## 2. Cấu trúc dữ liệu

- **FlatList**:
  - Cần một mảng dữ liệu phẳng (`data`) chứa các đối tượng.
  - Mỗi đối tượng có thể chứa các thuộc tính tùy ý để hiển thị.

  ```javascript
  const flatListData = [
    { id: '1', title: 'Item 1', description: 'Description 1' },
    { id: '2', title: 'Item 2', description: 'Description 2' },
  ];
  ```

- **SectionList**:
  - Cần một mảng các phần (`sections`), mỗi phần là một đối tượng chứa:
    - `title` hoặc `key`: tiêu đề của phần.
    - `data`: mảng các đối tượng trong phần.

  ```javascript
  const sectionListData = [
    {
      title: 'Group 1',
      data: [
        { id: '1', title: 'Item 1', description: 'Description 1' },
        { id: '2', title: 'Item 2', description: 'Description 2' },
      ],
    },
    {
      title: 'Group 2',
      data: [
        { id: '3', title: 'Item 3', description: 'Description 3' },
      ],
    },
  ];
  ```

## 3. Hiệu năng

- **FlatList**:
  - Hiệu năng tốt với danh sách lớn vì hỗ trợ cơ chế "lazy loading" (chỉ render các mục hiển thị trên màn hình).
  - Phù hợp với danh sách đơn giản và ít phức tạp.

- **SectionList**:
  - Cũng hỗ trợ "lazy loading" nhưng có thể kém hiệu quả hơn FlatList khi danh sách có số lượng phần và mục lớn do phải xử lý cấu trúc phân nhóm.
  - Tốn nhiều tài nguyên hơn để quản lý các phần tiêu đề.

## 4. Tính dễ sử dụng

- **FlatList**:
  - Dễ sử dụng và thiết lập vì chỉ cần truyền `data` và `renderItem`.
  - Phù hợp với các trường hợp cơ bản hoặc danh sách không phân nhóm.

- **SectionList**:
  - Cấu hình phức tạp hơn vì cần xử lý thêm phần tiêu đề (`renderSectionHeader`).
  - Thích hợp với các ứng dụng cần hiển thị danh sách có cấu trúc phức tạp hoặc yêu cầu phân loại rõ ràng.

## Tổng kết
| Tiêu chí           | FlatList                   | SectionList                 |
|--------------------|----------------------------|-----------------------------|
| Mục đích sử dụng  | Danh sách phẳng           | Danh sách phân nhóm        |
| Cấu trúc dữ liệu   | Mảng phẳng (`data`)       | Mảng các phần (`sections`) |
| Hiệu năng          | Tốt hơn với danh sách đơn | Tốt với danh sách phân nhóm |
| Tính dễ sử dụng    | Dễ hơn                    | Phức tạp hơn               |
